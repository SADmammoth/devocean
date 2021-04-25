import { atom, selector, selectorFamily, waitForAll } from "recoil";

import entriesArrangementSelector from "../helpers/entriesArrangementSelector";

import _ from "lodash";
import Client from "../../helpers/Client";
import serverStateSync from "../helpers/serverStateSync";
import mergeSelector from "../helpers/mergeSelector";
import folderTreeState, { folderTreeState_getById } from "./folderTreeState";
import { Children } from "react";
import getTasksOfFolderTree from "../helpers/getTasksOfFolderTree";
import treeArrayToMap from "../helpers/treeArrayToMap";
import { fullTaskConverter } from "../../helpers/responseConverters";
import updateSelector from "../helpers/updateSelector";

const baseKey = "tasksState_";

const postState = (newValue, oldValue) => {
  const diff = _.difference(newValue, oldValue);
  if (diff.length === 1 && newValue.length !== oldValue.length) {
    return Client.tasks.post(diff[0]);
  }

  if (diff.length === 1 && newValue.length === oldValue.length) {
    const newItem = diff[0];
    const oldItem = _.difference(oldValue, newValue)[0];
    const diffItem = _.differenceWith(
      Object.entries(newItem),
      Object.entries(oldItem),
      ([key1, val1], [key2, val2]) => {
        return key1 === key2 && val1 === val2;
      }
    );

    if (diffItem.length === 1 && diffItem[0][0] === "list") {
      return Client.tasks.addToList(newItem.id, diffItem[0][1].id);
    }

    return Client.tasks.patch(newItem.id, newItem);
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

export const tasksState_requestContent = selectorFamily({
  key: baseKey + "requestContent",
  get: (taskId) => ({ get }) =>
    Client.tasks.getById(taskId).then(fullTaskConverter),
});

export const tasksState_arrange = entriesArrangementSelector(
  baseKey,
  tasksStateAtom,
  Client.tasks.arrange
);

export const tasksState_update = updateSelector(baseKey, tasksStateAtom);

export default tasksState;
