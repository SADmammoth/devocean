import { atom, selector } from "recoil";
import Client from "../../helpers/Client";

const baseKey = "userState_";

const userStateAtom = atom({
  key: baseKey,
  default: null,
});

const userState = selector({
  key: baseKey + "set",
  get: ({ get }) => get(userStateAtom),
  set: ({ set }, { id, login }) => {
    set(userStateAtom, { id, login });
  },
});

export const userState_login = selector({
  key: baseKey + "login",
  set: ({ set }, { login, password }) =>
    Client.user
      .login(login, password)
      .then(({ id: userId }) => {
        set(userStateAtom, { userId, login });
        return userId;
      })
      .catch((res) => null),
});

export const userState_register = selector({
  key: baseKey + "register",
  set: ({}, { login, password }) =>
    Client.user
      .register(login, password)
      .then(({ id: userId }) => {
        return userId;
      })
      .catch((res) => null),
});

export default userState;
