export default function getTasksOfFolderTree(folderId, treeMap) {
  const folder = treeMap[folderId];

  let noChildrenItemsCount = 0;
  let newItems;

  const getTasks = (items) => {
    newItems = items
      .map((item) => {
        if (typeof item === 'string') {
          noChildrenItemsCount++;
          return item;
        }

        const { children, tasks } = item;

        if (children) {
          return children.map((id) => {
            return treeMap[id];
          });
        } else if (tasks) {
          return tasks;
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

  if (folder.children) return getTasks([folder]);
  return folder.tasks;
}
