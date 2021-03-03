export default function serverStateSync(getDefaultValue, syncState) {
  return ({ onSet, trigger, setSelf }) => {
    if (trigger === "get") {
      (async () => setSelf(await getDefaultValue()))();
    }
    onSet(syncState);
  };
}
