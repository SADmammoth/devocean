import { atom, selectorFamily } from "recoil";
import _ from "lodash";
import Client from "../../helpers/Client";

const baseKey = "reportsState_";

const getState = (task) => Client.reports.get(task);
const postState = (taskId, item) => Client.reports.post(taskId, item);

const reportsState = selectorFamily({
  key: baseKey + "getByTask",
  get: (taskId) => ({}) => {
    return getState(taskId);
  },
  set: (taskId) => ({}, value) => {
    return postState(taskId, value);
  },
});

export default reportsState;
