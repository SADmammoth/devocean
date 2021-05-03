import { selector } from "recoil";

export default function localStorageSelector(baseKey) {
  return selector({
    key: baseKey,
    get: () => localStorage.getItem(baseKey) || "list",
    set: ({}, value) => {
      localStorage.setItem(baseKey, value);
    },
  });
}
