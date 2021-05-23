export default function getParentsOfTreeNode(nodeId, treeMap) {
  const node = treeMap[nodeId];
  const nodes = [];

  const getParent = (node) => {
    nodes.push(node);
    if (node.parent) {
      return getParent(treeMap[node.parent]);
    }

    return node;
  };

  getParent(node);

  return nodes;
}
