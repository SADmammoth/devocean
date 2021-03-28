import { atom, selector, selectorFamily, waitForAll } from "recoil";
import _ from "lodash";
import Client from "../../helpers/Client";
import serverStateSync from "../helpers/serverStateSync";
import tasksState, { tasksState_getById } from "./tasksState";

const baseKey = "teammatesState_";

const getState = () => Client.teammates.get();

const teammatesStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState)],
});

const teammatesState = selector({
  key: baseKey + "get",
  get: ({ get }) => get(teammatesStateAtom),
});

export const teammatesState_getWithTasks = selector({
  key: baseKey + "tasks",
  get: ({ get }) => {
    const teammates = get(teammatesStateAtom);
    const teammatesTasks = {};

    teammates.forEach(({ id, name, lastName, assignedTasks }) => {
      teammatesTasks[id] = {
        displayName: `${name} ${lastName[0]}.`,
        assignedTasks: assignedTasks.map((taskId) => {
          return get(tasksState_getById(taskId));
        }),
      };
    });

    const tasks = get(tasksState);

    teammatesTasks.unassigned = {
      assignedTasks: tasks.filter(({ assignee }) => !assignee),
    };

    return teammatesTasks;
  },
});

export default teammatesState;
