import { selector } from "recoil";
import umi from "umi";
import generateId from "../../helpers/generateId";

export default function mergeSelector(baseKey, atom, idKey = "id") {
  return selector({
    key: baseKey + "merge",
    get: ({ get }) => get(atom),
    set: ({ get, set }, updateValue) => {
      const currentValue = get(atom);

      if (updateValue instanceof Array) {
        updateValue.forEach((value) => {
          if (!value[idKey]) value[idKey] = "temp_" + generateId();
        });
        set([...currentValue, ...updateValue]);
      } else {
        if (!updateValue[idKey]) updateValue[idKey] = "temp_" + generateId();
        set(atom, [...currentValue, updateValue]);
      }
    },
  });
}
