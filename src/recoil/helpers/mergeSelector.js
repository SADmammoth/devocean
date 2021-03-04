import { selector } from "recoil";

export default function mergeSelector(baseKey, atom) {
  return selector({
    key: baseKey + "merge",
    get: ({ get }) => get(atom),
    set: ({ get, set }, updateValue) => {
      const currentValue = get(atom);
      if (updateValue instanceof Array) {
        set([...currentValue, ...updateValue]);
      } else {
        set(atom, [...currentValue, updateValue]);
      }
    },
  });
}
