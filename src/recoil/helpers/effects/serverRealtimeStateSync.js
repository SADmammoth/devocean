import { useRecoilValue } from 'recoil';

import userState from '../../states/userState';

export default function serverRealtimeStateSync(
  subscriber,
  get,
  post,
  abortGet,
  abortPost,
) {
  return ({ node, onSet, trigger, setSelf }) => {
    const userToken = localStorage.getItem('user');

    if (get && trigger === 'get') {
      const initialize = async (/*value,*/ ...args) =>
        // JSON.stringify(value) === JSON.stringify(node.default)
        // ?
        await get(...args);
      // : value;

      const getData = async () => {
        setSelf(await initialize(userToken));

        subscriber(async () => {
          setSelf(await initialize(userToken));
        });
      };

      getData();
    }

    if (post) {
      onSet(async (newValue, oldValue) => {
        return await post(userToken, newValue, oldValue).catch(() => {
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
