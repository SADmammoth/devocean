import _ from 'lodash';
import { atom, selector, selectorFamily, waitForAll } from 'recoil';

import Client from '../../helpers/Client';
import Subscriber from '../../helpers/Subscriber';
import formatName from '../../helpers/formatName';
import getPostState from '../helpers/getPostState';
import mergeSelector from '../helpers/mergeSelector';
import noRequest from '../helpers/noRequest';
import serverRealtimeStateSync from '../helpers/serverRealtimeStateSync';
import serverStateSync from '../helpers/serverStateSync';
import updateSelector from '../helpers/updateSelector';
import tasksState, {
  tasksState_getById,
  tasksState_update,
} from './tasksState';

const baseKey = 'teammatesState_';

const getState = (userToken) => Client.teammates.get(userToken);
const postOne = noRequest;
const patchOne = noRequest;
const patchMap = {
  assignedTasks: noRequest,
};

const postState = getPostState(postOne, patchOne, patchMap);

const teammatesStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [
    serverRealtimeStateSync(Subscriber.teammates, getState, postState),
  ],
});

export const teammatesState_getWithTasks = selector({
  key: baseKey + 'tasks',
  get: ({ get }) => {
    const teammates = get(teammatesStateAtom);
    const teammatesTasks = {};

    teammates.forEach(({ id, name, lastName, assignedTasks }) => {
      teammatesTasks[id] = {
        displayName: formatName({ name, lastName }),
        assignedTasks: assignedTasks.map(({ task }) => {
          return get(tasksState_getById(task));
        }),
      };
    });

    const tasks = get(tasksState);

    teammatesTasks.unassigned = {
      assignedTasks: tasks.filter(({ assignee }) => !assignee),
    };

    return teammatesTasks;
  },
  set: ({ set }, value) => set(teammatesStateAtom),
});

export const teammatesState_Raw = teammatesStateAtom;

const teammatesState = mergeSelector(baseKey, teammatesState_getWithTasks);

export const teammatesState_getById = selectorFamily({
  key: baseKey + 'getById',
  get: (teammateId) => ({ get }) => {
    const teammates = get(teammatesStateAtom);
    return teammates.find(({ id }) => id === teammateId);
  },
});

export const teammatesState_update = updateSelector(
  baseKey,
  teammatesStateAtom,
);

export const teammatesState_removeTask = selector({
  key: baseKey + 'removeTask',
  set: ({ get, set }, { taskId, teammateId }) => {
    const teammate = get(teammatesState_getById(teammateId));
    const taskIndex = teammate.assignedTasks.findIndex((id) => {
      return taskId === id;
    });

    const assignedTasks = [...teammate.assignedTasks];
    assignedTasks.splice(taskIndex, 1);

    set(teammatesState_update(teammateId), { assignedTasks });
  },
});

export const teammatesState_addTask = selectorFamily({
  key: baseKey + 'addTask',
  set: (teammateId) => async ({ get, set }, taskId) => {
    const task = get(tasksState_getById(taskId));
    const assignee = get(teammatesState_getById(teammateId));

    set(tasksState_update(taskId), { assignee });

    set(teammatesState_update(teammateId), {
      assignedTasks: [...assignee.assignedTasks, { task: task.id }],
    });
  },
});
export default teammatesState;
