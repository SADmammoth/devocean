export default function getParentsOfFolderTree(folderId, treeMap) {
  const folder = treeMap[folderId];
  const folders = [];

  const getParent = (folder) => {
    folders.push(folder);
    if (folder.parent) {
      return getParent(treeMap[folder.parent]);
    }

    return folder;
  };

  getParent(folder);

  return folders;
}
