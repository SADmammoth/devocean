import { atom, selectorFamily } from "recoil";
import _ from "lodash";
import Client from "../../helpers/Client";

const baseKey = "statusChangesState_";

const getState = (task) => Client.statusChanges.get(task);

const statusChangesState = selectorFamily({
  key: baseKey + "getByTask",
  get: (taskId) => ({}) => {
    return getState(taskId);
  },
});

export default statusChangesState;
