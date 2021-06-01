import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';

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
  const token = await Client.user.login(login, password).catch((res) => null);
  return { ...(await Client.user.getData(token)), token };
};

export const userState_logout = async (teammateId) => {
  await Client.user.logout(teammateId);
};

export const userState_register = selector({
  key: baseKey + 'register',
  set: async ({ set }, { login, password }) => {
    const res = await Client.user
      .register(login, password)
      .then((res) => {
        return res;
      })
      .catch((res) => null);

    if (res) {
      set(userState_login, { login, password });
    }

    return res;
  },
});

const getUserData = (userToken) =>
  userToken ? Client.user.getData(userToken) : userToken;

const userDataAtom = atom({
  key: baseKey + 'data',
  default: {},
  effects_UNSTABLE: [serverStateSync(getUserData)],
});

export const userDataState = selector({
  key: baseKey + 'data_selector',
  get: ({ get }) => {
    const user = get(userDataAtom);

    if (!user || _.isEmpty(user)) return;
    const { teammateId, invited } = user;
    const teammates = get(teammateProfilesState);
    const teammate = teammates.find(({ id }) => id === teammateId);
    if (teammate) return { ...teammate, invited };
  },
});

export default userState;
