import { selector } from 'recoil';
import umi from 'umi';

export default function insertSelector(baseKey, atom) {
  return selector({
    key: baseKey + 'insert',
    get: ({ get }) => get(atom),
    set: ({ get, set }, { value, index }) => {
      const currentValue = get(atom);

      const updatedValue = [...currentValue];
      updatedValue.splice(index, 0, ...Array(value));

      set(atom, updatedValue);
    },
  });
}
