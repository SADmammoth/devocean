import { selector, selectorFamily } from 'recoil';
import umi from 'umi';

import generateId from '../../../helpers/functions/generateId';

export default function mergeSelectorFamily(baseKey, atom, idKey = 'id') {
  return selectorFamily({
    key: baseKey + 'merge',
    get: (...args) => ({ get }) => get(atom(...args)),
    set: (...args) => ({ get, set }, updateValue) => {
      const currentValue = get(atom(...args));

      if (updateValue instanceof Array) {
        updateValue.forEach((value) => {
          if (!value[idKey]) value[idKey] = 'temp_' + generateId();
        });
        set(atom(...args), [...currentValue, ...updateValue]);
      } else {
        if (!updateValue[idKey]) updateValue[idKey] = 'temp_' + generateId();
        set(atom(...args), [...currentValue, updateValue]);
      }
    },
  });
}
