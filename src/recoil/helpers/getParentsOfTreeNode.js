export default function getParentsOfTreeNode(nodeId, treeMap) {
  const node = treeMap[nodeId];
  if (!node) return [null];
  const nodes = [];

  const getParent = (node) => {
    if (node.parent) {
      nodes.push(node.parent);
      return getParent(treeMap[node.parent]);
    }

    return node;
  };

  getParent(node);

  return nodes;
}
