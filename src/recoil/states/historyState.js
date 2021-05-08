import { atom, selectorFamily } from "recoil";
import _ from "lodash";
import Client from "../../helpers/Client";

const baseKey = "historyState_";

const getState = (task) => Client.history.get(task);

const historyState = selectorFamily({
  key: baseKey + "getByTask",
  get: (taskId) => ({}) => {
    return getState(taskId);
  },
});

export default historyState;
