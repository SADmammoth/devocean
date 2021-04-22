import { atom, selectorFamily } from "recoil";
import _ from "lodash";
import Client from "../../helpers/Client";
import serverStateSync from "../helpers/serverStateSync";
import getParentsOfFolderTree from "../helpers/getParentsOfFolderTree";
import updateSelector from "../helpers/updateSelector";
import mergeSelector from "../helpers/mergeSelector";

const baseKey = "folderTreeState_";

const getState = () => Client.folders.get();

const postState = (newValue, oldValue) => {
  const diff = _.difference(newValue, oldValue);
  if (diff.length === 1 && newValue.length !== oldValue.length) {
    return Client.folders.post(diff[0]);
  }

  if (diff.length === 1 && newValue.length === oldValue.length) {
    const newItem = diff[0];

    return Client.folders.patch(newItem.id, newItem);
  }
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

export default folderTreeState;
