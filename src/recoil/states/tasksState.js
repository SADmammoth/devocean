import _ from 'lodash';
import { atom, selector, selectorFamily, waitForAll } from 'recoil';

import Client from '../../helpers/Client';
import Subscriber from '../../helpers/Subscriber';
import { fullTaskConverter } from '../../helpers/responseConverters';
import deleteSelector from '../helpers/deleteSelector';
import entriesArrangementSelector from '../helpers/entriesArrangementSelector';
import getPostState from '../helpers/getPostState';
import getTasksOfFolderTree from '../helpers/getTasksOfFolderTree';
import mergeSelector from '../helpers/mergeSelector';
import serverRealtimeStateSync from '../helpers/serverRealtimeStateSync';
import treeArrayToMap from '../helpers/treeArrayToMap';
import updateSelector from '../helpers/updateSelector';
import folderTreeState from './folderTreeState';
import userState from './userState';

const baseKey = 'tasksState_';
const postOne = (userToken, item) => Client.tasks.post(userToken, item);
const patchOne = (userToken, item) =>
  Client.tasks.patch(userToken, item.id, item);
const deleteOne = (userToken, item) => Client.tasks.delete(userToken, item.id);

const getState = (userToken) => Client.tasks.get(userToken);
const postState = getPostState(
  postOne,
  patchOne,
  {
    list: (userToken, list, item) => {
      return Client.tasks.addToList(userToken, item.id, list.id);
    },
    status: async (userToken, status, item) => {
      return Client.tasks.changeStatus(userToken, item.id, {
        status: status.name,
        text: status.text,
      });
    },
    assignee: (userToken, assignee, item) => {
      return Client.tasks.assign(userToken, item.id, assignee);
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

export const tasksState_getByFolder = selectorFamily({
  key: baseKey + 'getByFolder',
  get: (folderId) => ({ get }) => {
    const folders = get(folderTreeState);

    const foldersMap = treeArrayToMap(folders);
    const taskIds = getTasksOfFolderTree(folderId, foldersMap);

    return taskIds.map((id) => get(tasksState_getById(id)));
  },
});

export const tasksState_requestContent = selectorFamily({
  key: baseKey + 'requestContent',
  get: (taskId) => ({ get }) => {
    const userToken = get(userState);
    return Client.tasks.getById(taskId, userToken).then(fullTaskConverter);
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
