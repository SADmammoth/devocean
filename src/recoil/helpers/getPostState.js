import noRequest from "./noRequest";

const getPostState = (postOne, patchOne, patchFieldsMap) => (
  newValue,
  oldValue
) => {
  const diff = _.differenceWith(newValue, oldValue, _.isEqual);

  if (diff.length === 1 && newValue.length > oldValue.length) {
    return postOne(diff[0]);
  }

  if (patchOne && diff.length === 1 && newValue.length === oldValue.length) {
    const newItem = diff[0];
    const oldItem = _.difference(oldValue, newValue)[0];

    const diffItem = _.differenceWith(
      Object.entries(newItem),
      Object.entries(oldItem),
      ([key1, val1], [key2, val2]) => {
        return key1 === key2 && val1 === val2;
      }
    );

    if (patchFieldsMap && diffItem.length === 1) {
      const [key, value] = diffItem[0];
      const func = patchFieldsMap[key];
      if (func) {
        return func(value, newItem);
      }
    }

    return patchOne(newItem);
  }
  return noRequest();
};

export default getPostState;
