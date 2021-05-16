import { atom, selector } from 'recoil';

import Client from '../../helpers/services/Client';
import serverStateSync from '../helpers/effects/serverStateSync';
import teammatesProfilesState from './teammatesProfilesState';
import { teammateProfilesState_getById } from './teammatesProfilesState';
import teammatesState, { teammatesState_Raw } from './teammatesState';

const baseKey = 'userState_';

const userState = selector({
  key: baseKey + 'set',
  get: () => localStorage.getItem('user'),
  set: ({}, user) => localStorage.setItem('user', user),
});

export const userState_login = selector({
  key: baseKey + 'login',
  set: async ({ set }, { login, password }) => {
    await Client.user
      .login(login, password)
      .then((token) => {
        console.log(token);
        set(userState, token);
      })
      .catch((res) => null);
  },
});

export const userState_register = selector({
  key: baseKey + 'register',
  set: ({}, { login, password }) =>
    Client.user
      .register(login, password)
      .then(({ id: userId }) => {
        return userId;
      })
      .catch((res) => null),
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
