import { selector, selectorFamily } from 'recoil';
import umi from 'umi';

import getLeavesOfTree from '../getLeavesOfTree';
import treeArrayToMap from '../treeArrayToMap';

export default function subtreeSelector(
  baseKey,
  treeAtom,
  leavesAtom,
  leafKey,
) {
  return selectorFamily({
    key: baseKey + 'getSubtree',
    get: (subtreeRootId) => ({ get }) => {
      const tree = get(treeAtom);

      const treeMap = treeArrayToMap(tree);
      const leavesIds = getLeavesOfTree(subtreeRootId, treeMap, leafKey);

      const leaves = get(leavesAtom);

      return leaves.filter(({ id }) => leavesIds.includes(id));
    },
  });
}
