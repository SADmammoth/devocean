import { selectorFamily } from "recoil";

export default function updateSelector(baseKey, atom, idKey = "id") {
  return selectorFamily({
    key: baseKey + "update",
    get: (id) => ({ get }) => {
      const items = get(atom);
      return items.find(({ [idKey]: candidateId }) => candidateId === id);
    },
    set: (id) => async ({ get, set }, updateValue) => {
      const currentValue = get(atom);
      const index = currentValue.findIndex(
        ({ [idKey]: candidateId }) => candidateId === id
      );
      const valueToChange = currentValue[index];

      set(atom, [
        ...currentValue.slice(0, index),
        { ...valueToChange, ...updateValue },
        ...currentValue.slice(index + 1),
      ]);
    },
  });
}
