import { atom, selector, selectorFamily } from "recoil";
import _ from "lodash";
import Client from "../../helpers/Client";
import serverStateSync from "../helpers/serverStateSync";
import getParentsOfFolderTree from "../helpers/getParentsOfFolderTree";
import updateSelector from "../helpers/updateSelector";
import mergeSelector from "../helpers/mergeSelector";
import { tasksState_getById, tasksState_update } from "./tasksState";

const baseKey = "folderTreeState_";

const getState = () => Client.folders.get();

const postState = (newValue, oldValue) => {
  const diff = _.difference(newValue, oldValue);
  if (diff.length === 1 && newValue.length !== oldValue.length) {
    return Client.folders.post(diff[0]);
  }

  if (diff.length === 1 && newValue.length === oldValue.length) {
    const newItem = diff[0];
    const oldItem = _.difference(oldValue, newValue)[0];

    if (newItem.tasks.length !== oldItem.tasks.length) {
      return new Promise(() => {});
    }

    return Client.folders.patch(newItem.id, newItem);
  }
  return new Promise(() => {});
};

const folderTreeStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState, postState)],
});

// const folderTreeState = selector({
//   key: baseKey + "add",
//   get: ({ get }) => get(folderTreeStateAtom),
//   set: ({ set }, { isList, parent,  name, children})=>{
//     const isParentExist =
//   }
// });

const folderTreeState = mergeSelector(baseKey, folderTreeStateAtom);

export const folderTreeState_getById = selectorFamily({
  key: baseKey + "getById",
  get: (folderId) => ({ get }) => {
    const folders = get(folderTreeStateAtom);

    return folders.find(({ id }) => folderId === id);
  },
});

// export const folderTreeState_traverseUp = selectorFamily({
//   key: baseKey + "getById",
//   get: (folderId) => ({ get }) => {
//     const folders = get(folderTreeStateAtom);
//     const foldersMap = treeArrayToMap(folders);
//     const parentFolders = getParentsOfFolderTree(folderId, foldersMap);

//     return parentFolders;
//   },
// });

export const folderTreeState_update = updateSelector(
  baseKey,
  folderTreeStateAtom
);

export const folderTreeState_removeTask = selector({
  key: baseKey + "removeTask",
  set: ({ get, set }, { taskId, listId }) => {
    console.log(taskId, listId);
    const list = get(folderTreeState_getById(listId));
    const taskIndex = list.tasks.findIndex((id) => {
      return taskId === id;
    });

    const tasks = [...list.tasks];
    tasks.splice(taskIndex, 1);
    console.log(tasks);

    set(folderTreeState_update(listId), { tasks });
  },
});

export const folderTreeState_addTask = selectorFamily({
  key: baseKey + "addTask",
  set: (listId) => async ({ get, set }, taskId) => {
    const task = get(tasksState_getById(taskId));
    const oldListId = task.list.id;
    const list = get(folderTreeState_getById(listId));

    console.log(oldListId, listId);

    set(tasksState_update(taskId), { list });

    set(folderTreeState_update(listId), {
      tasks: [...list.tasks, task.id],
    });
  },
});

export default folderTreeState;
