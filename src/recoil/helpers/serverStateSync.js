import { node } from "prop-types";

export default function serverStateSync(get, post, abortGet, abortPost) {
  return ({ node, onSet, trigger, setSelf }) => {
    console.log(trigger, node);
    if (get && trigger === "get") {
      const initialize = async (value) =>
        JSON.stringify(value) === JSON.stringify(node.default)
          ? await get()
          : value;

      const getData = async () => {
        setSelf(await initialize());
      };

      getData();
    }

    if (post) {
      onSet(async (newValue, oldValue) => {
        return await post(newValue, oldValue).catch(() => {
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
