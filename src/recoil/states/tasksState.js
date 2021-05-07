import { atom, selector, selectorFamily, waitForAll } from "recoil";

import deleteSelector from "../helpers/deleteSelector";

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
import getPostState from "../helpers/getPostState";
import showPopup from "../../helpers/showPopup";

const baseKey = "tasksState_";
const postOne = (item) => Client.tasks.post(item);
const patchOne = (item) => Client.tasks.patch(item.id, item);
const deleteOne = (item) => Client.tasks.delete(item.id);

const getState = () => Client.tasks.get();
const postState = getPostState(
  postOne,
  patchOne,
  {
    list: (list, item) => {
      return Client.tasks.addToList(item.id, list.id);
    },
    status: async (status, item) => {
      return Client.tasks.changeStatus(item.id, {
        status: status.name,
        text: status.text,
      });
    },
    assignee: (assignee, item) => {
      return Client.tasks.assign(item.id, assignee);
    },
  },
  deleteOne
);

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
export const tasksState_delete = deleteSelector(baseKey, tasksStateAtom);

export default tasksState;
