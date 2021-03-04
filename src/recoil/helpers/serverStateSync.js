export default function serverStateSync(get, post, abortGet, abortPost) {
  return ({ onSet, trigger, setSelf }) => {
    if (trigger === "get") {
      const getData = async () => setSelf(await get());

      getData();
    }

    onSet(async (newValue, oldValue) => {
      return await post(newValue, oldValue).catch(() => {
        setSelf(oldValue);
      });
    });

    return () => {
      if (get.abort) {
        get.abort();
      } else if (abortGet) {
        abortGet();
      }

      if (post.abort) {
        post.abort();
      } else if (abortPost) {
        abortPost();
      }
    };
  };
}
