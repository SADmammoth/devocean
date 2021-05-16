export default function localStorageSync(baseKey) {
  return ({ node, onSet, trigger, setSelf }) => {
    if (trigger === 'get') {
      let storageData;
      try {
        storageData = JSON.parse(localStorage.getItem(baseKey));
      } catch (err) {
        storageData = localStorage.getItem(baseKey);
      }
      setSelf((data) => {
        if (!data && storageData) {
          return storageData;
        }

        return data;
      });
    }

    onSet(async (value) => {
      localStorageSync.setItem(
        baseKey,
        typeof value === 'string' ? value : JSON.stringify(value),
      );
    });
  };
}
