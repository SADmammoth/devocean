export default function getLeavesOfTree(nodeId, treeMap, leafKey) {
  const node = treeMap[nodeId];

  let noChildrenItemsCount = 0;
  let newItems;

  const getTasks = (items) => {
    newItems = items
      .map((item) => {
        if (typeof item === 'string') {
          noChildrenItemsCount++;
          return item;
        }

        console.log(item);

        const { children, [leafKey]: leaves } = item;

        if (children) {
          return [
            ...(leaves || []),
            ...children.map((id) => {
              return treeMap[id];
            }),
          ];
        } else if (leaves) {
          return leaves;
        } else {
          noChildrenItemsCount++;
        }
      })
      .flat();

    if (noChildrenItemsCount === newItems.length) {
      return items;
    } else {
      noChildrenItemsCount = 0;
      return getTasks(newItems);
    }
  };

  if (!node) return null;
  if (node.children && node.children.length) return getTasks([node]);
  return node[leafKey];
}
