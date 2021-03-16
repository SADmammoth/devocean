import { atom, selector } from "recoil";
import folderTreeState from "../../../recoil/states/folderTreeState";
import { tasksState_getByFolder } from "../../../recoil/states/tasksState";

const baseKey = "currentFolder_";

const currentFolderState = atom({
  key: baseKey,
  default: 0,
});

export default currentFolderState;
