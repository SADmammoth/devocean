import _ from 'lodash';
import { atom, selector, selectorFamily } from 'recoil';

import Client from '../../helpers/Client';
import Subscriber from '../../helpers/Subscriber';
import getParentsOfFolderTree from '../helpers/getParentsOfFolderTree';
import getPostState from '../helpers/getPostState';
import mergeSelector from '../helpers/mergeSelector';
import noRequest from '../helpers/noRequest';
import serverRealtimeStateSync from '../helpers/serverRealtimeStateSync';
import serverStateSync from '../helpers/serverStateSync';
import updateSelector from '../helpers/updateSelector';
import { tasksState_getById, tasksState_update } from './tasksState';

const baseKey = 'folderTreeState_';

const getState = (userToken) => Client.folders.get(userToken);
const postOne = (userToken, item) => Client.folders.post(userToken, item);
const patchOne = (userToken, item) =>
  Client.folders.patch(userToken, item.id, item);

const postState = getPostState(postOne, patchOne, {
  tasks: noRequest,
});

const subscriber = Subscriber.taskcollections;

const folderTreeStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverRealtimeStateSync(subscriber, getState, postState)],
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
  key: baseKey + 'getById',
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
  folderTreeStateAtom,
);

export const folderTreeState_removeTask = selector({
  key: baseKey + 'removeTask',
  set: ({ get, set }, { taskId, listId }) => {
    const list = get(folderTreeState_getById(listId));
    const taskIndex = list.tasks.findIndex((id) => {
      return taskId === id;
    });

    const tasks = [...list.tasks];
    tasks.splice(taskIndex, 1);

    set(folderTreeState_update(listId), { tasks });
  },
});

export const folderTreeState_addTask = selectorFamily({
  key: baseKey + 'addTask',
  set: (listId) => async ({ get, set }, taskId) => {
    const task = get(tasksState_getById(taskId));
    const oldListId = task.list.id;
    const list = get(folderTreeState_getById(listId));

    set(tasksState_update(taskId), { list });

    set(folderTreeState_update(listId), {
      tasks: [...list.tasks, task.id],
    });
  },
});

export default folderTreeState;
