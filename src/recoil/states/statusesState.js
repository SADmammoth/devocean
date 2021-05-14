import _ from 'lodash';
import { atom, selector, selectorFamily, waitForAll } from 'recoil';

import Client from '../../helpers/services/Client';
import serverStateSync from '../helpers/effects/serverStateSync';
import getPostState from '../helpers/getPostState';
import noRequest from '../helpers/noRequest';
import mergeSelector from '../helpers/selectors/mergeSelector';
import updateSelector from '../helpers/selectors/updateSelector';
import { tasksState_getById, tasksState_update } from './tasksState';

const baseKey = 'statusesState_';

const getState = (userToken) => Client.statuses.get(userToken);
const postOne = (userToken, item) => Client.statuses.post(item.name, userToken);

const postState = getPostState(postOne);

const statusesStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState, postState)],
});

const statusesState = mergeSelector(baseKey, statusesStateAtom);

export const statusesState_getWithTasks = selector({
  key: baseKey + 'tasks',
  get: ({ get }) => {
    const statuses = get(statusesStateAtom);
    const statusesTasks = {};

    statuses.forEach(({ name, tasks }) => {
      if (!tasks) {
        statusesTasks[name] = [];
        return;
      }
      statusesTasks[name] = tasks.map((taskId) => {
        return get(tasksState_getById(taskId));
      });
    });

    return statusesTasks;
  },
});

export const statusesState_update = updateSelector(
  baseKey,
  statusesStateAtom,
  'name',
);

export const statusesState_removeTask = selector({
  key: baseKey + 'removeTask',
  set: ({ get, set }, { statusName, taskId }) => {
    const statuses = get(statusesStateAtom);
    const status = statuses.find(({ name }) => name === statusName);

    let tasks = [...status.tasks];
    const ind = tasks.findIndex(({ id }) => id === taskId);
    tasks.splice(ind, 1);

    set(statusesState_update(statusName), { tasks: [] });
  },
});

export const statusesState_addTask = selectorFamily({
  key: baseKey + 'addTask',
  set: (statusName) => ({ get, set }, { taskId, text }) => {
    const statuses = get(statusesStateAtom);
    const status = statuses.find(({ name }) => name === statusName);

    set(statusesState_update(statusName), { tasks: [...status.tasks, taskId] });

    set(tasksState_update(taskId), {
      status: { name: statusName, text },
    });
  },
});

export default statusesState;
