import { selector } from "recoil";

const baseKey = "lastTaskViewState_";

const lastTaskViewState = selector({
  key: baseKey,
  get: () => localStorage.getItem(baseKey) || "list",
  set: ({}, value) => {
    localStorage.setItem(baseKey, value);
  },
});

export default lastTaskViewState;
