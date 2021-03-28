import { atom, selectorFamily, waitForAll } from "recoil";
import _ from "lodash";
import Client from "../../helpers/Client";
import serverStateSync from "../helpers/serverStateSync";
import mergeSelector from "../helpers/mergeSelector";
import folderTreeState, { folderTreeState_getById } from "./folderTreeState";
import { Children } from "react";
import getTasksOfFolderTree from "../helpers/getTasksOfFolderTree";
import treeArrayToMap from "../helpers/treeArrayToMap";

const baseKey = "tasksState_";

const postState = (newValue, oldValue) => {
  const diff = _.difference(newValue, oldValue);
  if (diff.length === 1) {
    return Client.tasks.post(diff[0]);
  }
};

const getState = () => Client.tasks.get();

const tasksStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState, postState)],
});

const tasksState = mergeSelector(baseKey, tasksStateAtom);

export const tasksState_getById = selectorFamily({
  key: baseKey + "getById",
  get: (targetId) => ({ get }) => {
    const tasks = get(tasksState);
    return tasks.find(({ id }) => id === targetId) || tasks[targetId];
  },
});

export const tasksState_getByFolder = selectorFamily({
  key: baseKey + "getByFolder",
  get: (folderId) => ({ get }) => {
    const folders = get(folderTreeState);

    const foldersMap = treeArrayToMap(folders);
    const taskIds = getTasksOfFolderTree(folderId, foldersMap);

    return taskIds.map((id) => get(tasksState_getById(id)));
  },
});

export default tasksState;
