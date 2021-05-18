import _ from 'lodash';
import { atom, selector, selectorFamily, waitForAll } from 'recoil';

import formatName from '../../helpers/functions/formatName';
import Client from '../../helpers/services/Client';
import Subscriber from '../../helpers/services/Subscriber';
import serverRealtimeStateSync from '../helpers/effects/serverRealtimeStateSync';
import getPostState from '../helpers/getPostState';
import noRequest from '../helpers/noRequest';
import mergeSelector from '../helpers/selectors/mergeSelector';
import updateSelector from '../helpers/selectors/updateSelector';
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

    teammates.forEach(
      ({ id, name, shortName, avatar, lastName, assignedTasks }) => {
        teammatesTasks[id] = {
          displayName: formatName({ name, shortName, lastName }),
          avatar,
          assignedTasks: assignedTasks.map(({ task }) => {
            return get(tasksState_getById(task));
          }),
        };
      },
    );

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
  set: (teammateId) => async ({ get, set }, { taskId, index }) => {
    const task = get(tasksState_getById(taskId));
    const assignee = get(teammatesState_getById(teammateId));

    set(tasksState_update(taskId), { assignee });

    const assignedTasks = [...assignee.assignedTasks];
    assignedTasks.splice(index.x, 0, {
      assignedDate: new Date().toISOString(),
      task: task.id,
    });

    set(teammatesState_update(teammateId), {
      assignedTasks,
    });
  },
});
export default teammatesState;
