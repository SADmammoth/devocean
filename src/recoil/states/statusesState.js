import { atom, selector, selectorFamily, waitForAll } from "recoil";
import _ from "lodash";
import Client from "../../helpers/Client";
import serverStateSync from "../helpers/serverStateSync";
import { tasksState_getById } from "./tasksState";

const baseKey = "statusesState_";

const getState = () => Client.statuses.get();

const statusesStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState)],
});

const statusesState = selector({
  key: baseKey + "get",
  get: ({ get }) => get(statusesStateAtom),
});

export const statusesState_getWithTasks = selector({
  key: baseKey + "tasks",
  get: ({ get }) => {
    const statuses = get(statusesStateAtom);
    const statusesTasks = {};

    console.log(statuses);

    statuses.forEach(({ name, tasks }) => {
      statusesTasks[name] = tasks.map((taskId) => {
        return get(tasksState_getById(taskId));
      });
    });

    return statusesTasks;
  },
});

export default statusesState;
