import { atom } from 'recoil';

const baseKey = 'currentFolder_';

const currentFolderState = atom({
  key: baseKey,
  default: 0,
});

export default currentFolderState;
