import { atom } from 'recoil';

const baseKey = 'currentSubteam_';

const currentSubteamState = atom({
  key: baseKey,
  default: 0,
});

export default currentSubteamState;
