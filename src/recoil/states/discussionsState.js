import { atom, selectorFamily } from "recoil";
import _ from "lodash";
import Client from "../../helpers/Client";

const baseKey = "discussionsState_";

const getState = (task) => Client.discussions.get(task);
const postState = (taskId, item) => Client.discussions.post(taskId, item);

const discussionsState = selectorFamily({
  key: baseKey + "getByTask",
  get: (taskId) => ({}) => {
    return getState(taskId);
  },
  set: (taskId) => ({}, value) => {
    return postState(taskId, value);
  },
});

export default discussionsState;
