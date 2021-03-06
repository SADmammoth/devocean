import _ from 'lodash';
import { atom, selector, selectorFamily, waitForAll } from 'recoil';

import Client from '../../helpers/services/Client';
import Subscriber from '../../helpers/services/Subscriber';
import serverRealtimeStateSync from '../helpers/effects/serverRealtimeStateSync';
import getPostState from '../helpers/getPostState';
import deleteSelector from '../helpers/selectors/deleteSelector';
import entriesArrangementSelector from '../helpers/selectors/entriesArrangementSelector';
import mergeSelector from '../helpers/selectors/mergeSelector';
import subtreeSelector from '../helpers/selectors/subtreeSelector';
import updateSelector from '../helpers/selectors/updateSelector';
import folderTreeState from './folderTreeState';
import userState from './userState';

const baseKey = 'tasksState_';
const postOne = (userToken, item) => Client.tasks.post(item, userToken);
const patchOne = (userToken, item) =>
  Client.tasks.patch(item.id, item, userToken);
const deleteOne = (userToken, item) => Client.tasks.delete(item.id, userToken);

const getState = (userToken) => Client.tasks.get(userToken);
const postState = getPostState(
  postOne,
  patchOne,
  {
    list: (userToken, list, item) => {
      return Client.tasks.addToList(item.id, list.id, userToken);
    },
    status: async (userToken, status, item) => {
      return Client.tasks.changeStatus(
        item.id,
        {
          status: status.name,
          text: status.text,
        },
        userToken,
      );
    },
    assignee: (userToken, assignee, item) => {
      return Client.tasks.assign(item.id, assignee, userToken);
    },
  },
  deleteOne,
);

const tasksStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [
    serverRealtimeStateSync(Subscriber.tasks, getState, postState),
  ],
});

const tasksState = mergeSelector(baseKey, tasksStateAtom);

export const tasksState_getById = selectorFamily({
  key: baseKey + 'getById',
  get: (targetId) => ({ get }) => {
    const tasks = get(tasksState);
    return tasks.find(({ id }) => id === targetId) || tasks[targetId];
  },
});

export const tasksState_getByFolder = subtreeSelector(
  baseKey,
  folderTreeState,
  tasksStateAtom,
  'tasks',
);

export const tasksState_requestContent = selectorFamily({
  key: baseKey + 'requestContent',
  get: (taskId) => async ({ get }) => {
    const userToken = get(userState);
    const tasks = get(tasksStateAtom);
    return {
      ...tasks.find(({ id }) => id === taskId),
      ...(await Client.tasks.getById(taskId, userToken)),
    };
  },
});

export const tasksState_arrange = entriesArrangementSelector(
  baseKey,
  tasksStateAtom,
  Client.tasks.arrange,
);

export const tasksState_update = updateSelector(baseKey, tasksStateAtom);
export const tasksState_delete = deleteSelector(baseKey, tasksStateAtom);

export const tasksState_getEvents = selector({
  key: baseKey + 'events',
  get: ({ get }) => {
    const tasks = get(tasksState);

    return tasks.filter(({ template }) => {
      return template.name === 'Event';
    });
  },
});

export default tasksState;
