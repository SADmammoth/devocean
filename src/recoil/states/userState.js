import { atom, selector, useSetRecoilState } from 'recoil';

import Client from '../../helpers/services/Client';
import localStorageSync from '../helpers/effects/localStorageSync';
import serverStateSync from '../helpers/effects/serverStateSync';
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

const getUserData = (userToken) => Client.user.getData(userToken);

const userDataAtom = atom({
  key: baseKey + 'data',
  default: {},
  effects_UNSTABLE: [serverStateSync(getUserData)],
});

export const userDataState = selector({
  key: baseKey + 'data_selector',
  get: ({ get }) => {
    const { teammateId } = get(userDataAtom);
    const teammates = get(teammatesState_Raw);
    console.log({ ...teammates });
    return teammates.find(({ id }) => id === teammateId);
  },
});

export default userState;
