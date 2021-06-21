import {
  atom,
  atomFamily,
  selector,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

import Client from '../../helpers/services/Client';
import localStorageSync from '../helpers/effects/localStorageSync';
import serverStateSync from '../helpers/effects/serverStateSync';
import teammateProfilesState from './teammatesProfilesState';
import { teammatesState_Raw } from './teammatesState';

const baseKey = 'userState_';

const userState = atom({
  key: baseKey,
  default: null,
  effects_UNSTABLE: [localStorageSync(baseKey)],
});

export const userState_login = async ({ login, password }) => {
  const token = await Client.user.login(login, password);
  return { ...(await Client.user.getData(token)), token };
};

export const userState_logout = async (teammateId) => {
  await Client.user.logout(teammateId);
};

export const userState_register = async ({ login, password }) => {
  const res = await Client.user
    .register(login, password)
    .then((res) => {
      return res;
    })
    .catch((res) => {
      throw res.response.text;
    });

  return await userState_login({ login, password });
};

const getUserData = (userToken) =>
  userToken ? Client.user.getData(userToken) : userToken;

const userDataAtom = atomFamily({
  key: baseKey + 'data',
  default: {},
  effects_UNSTABLE: (userToken) => [
    serverStateSync(() => getUserData(userToken)),
  ],
});

export const userDataState = selector({
  key: baseKey + 'data_selector',
  get: ({ get }) => {
    const userToken = get(userState);

    if (!userToken) return {};
    const user = get(userDataAtom(userToken));

    const { teammateId, invited } = user;
    const teammates = get(teammateProfilesState);
    const teammate = teammates.find(({ id }) => id === teammateId);
    if (teammate) return { ...teammate, ...user };
  },
});

export default userState;
