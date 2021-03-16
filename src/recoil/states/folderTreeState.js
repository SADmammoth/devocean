import { atom, selectorFamily } from "recoil";
import _ from "lodash";
import Client from "../../helpers/Client";
import serverStateSync from "../helpers/serverStateSync";

const baseKey = "folderTreeState_";

const getState = () => Client.folders.get();

const folderTreeStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState)],
});

// const folderTreeState = selector({
//   key: baseKey + "add",
//   get: ({ get }) => get(folderTreeStateAtom),
//   set: ({ set }, { isList, parent,  name, children})=>{
//     const isParentExist =
//   }
// });

const folderTreeState = folderTreeStateAtom;

export const folderTreeState_getById = selectorFamily({
  key: baseKey + "getById",
  get: (folderId) => ({ get }) => {
    const folders = get(folderTreeStateAtom);

    return folders.find(({ id }) => folderId === id);
  },
});

export default folderTreeState;
