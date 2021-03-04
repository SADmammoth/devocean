export default function serverStateSync(get, post) {
  return ({ onSet, trigger, setSelf }) => {
    if (trigger === "get") {
      const getData = async () => setSelf(await get());

      getData();
    }

    onSet((newValue, oldValue) => {
      post(newValue, oldValue).catch(() => {
        setSelf(oldValue);
      });
    });
  };
}
