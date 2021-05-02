import { atom, selector, selectorFamily, waitForAll } from "recoil";
import _ from "lodash";
import Client from "../../helpers/Client";
import serverStateSync from "../helpers/serverStateSync";
import { tasksState_getById, tasksState_update } from "./tasksState";
import updateSelector from "../helpers/updateSelector";
import mergeSelector from "../helpers/mergeSelector";
import noRequest from "../helpers/noRequest";
import getPostState from "../helpers/getPostState";

const baseKey = "statusesState_";

const getState = () => Client.statuses.get();
const postOne = (item) => Client.folders.post(item.name);

const postState = getPostState(postOne);

const statusesStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState, postState)],
});

const statusesState = mergeSelector(baseKey, statusesStateAtom);

export const statusesState_getWithTasks = selector({
  key: baseKey + "tasks",
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
  "name"
);

export const statusesState_removeTask = selector({
  key: baseKey + "removeTask",
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
  key: baseKey + "addTask",
  set: (statusName) => ({ get, set }, taskId) => {
    const statuses = get(statusesStateAtom);
    const status = statuses.find(({ name }) => name === statusName);

    set(statusesState_update(statusName), { tasks: [...status.tasks, taskId] });

    set(tasksState_update(taskId), { status: statusName });
  },
});

export default statusesState;
