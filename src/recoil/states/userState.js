import { atom, selector } from 'recoil';

import Client from '../../helpers/services/Client';

const baseKey = 'userState_';

const userState = selector({
  key: baseKey + 'set',
  get: () => localStorage.getItem('user'),
  set: (user) => localStorage.setItem('user', user),
});

export const userState_login = selector({
  key: baseKey + 'login',
  set: ({ set }, { login, password }) =>
    Client.user
      .login(login, password)
      .then(({ id: userId }) => {
        set(userState, { userId, login });
        return userId;
      })
      .catch((res) => null),
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

export default userState;
