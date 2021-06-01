export default function serverStateSync(get, post, abortGet, abortPost) {
  let initialized = false;
  serverStateSync.handSync = {};
  return ({ node, onSet, trigger, setSelf }) => {
    const userToken = localStorage.getItem('userState_');

    if (get && trigger === 'get') {
      const initialize = (...args) => get(...args);

      const getData = async () => {
        initialized = true;
        setSelf(await initialize(userToken));
      };

      serverStateSync.handSync[node.key] = getData;

      if (!initialized) getData();
    }

    if (post) {
      onSet(async (newValue, oldValue) => {
        return await post(userToken, newValue, oldValue).catch((err) => {
          setSelf(oldValue);
        });
      });
    }

    return () => {
      if (get && get.abort) {
        get.abort();
      } else if (abortGet) {
        abortGet();
      }

      if (post && post.abort) {
        post.abort();
      } else if (abortPost) {
        abortPost();
      }
    };
  };
}
