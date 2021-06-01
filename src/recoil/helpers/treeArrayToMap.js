export default function treeArrayToMap(tree) {
  const map = {};
  tree.forEach((treeItem) => {
    map[treeItem.id] = treeItem;
  });
  return map;
}
