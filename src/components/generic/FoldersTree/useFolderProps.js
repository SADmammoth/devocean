import { useCallback } from 'react';

export default function useFolderProps(
  folders,
  classes,
  selectedIndex,
  selectedParents,
  selectFolder,
  FolderBase,
) {
  const createFolderProps = useCallback(
    (folderId, passedIndex) => {
      let index;
      if (passedIndex) {
        index = passedIndex;
      } else {
        index = folders.findIndex(({ id }) => id === folderId);
      }

      if (index < 0) {
        return null;
      }

      const { id, name, children, tasks, isConstant } = folders[index];

      return {
        id,
        classes,
        FolderBase,
        type: !!tasks ? 'list' : 'folder',
        name,
        selectFolder,
        childrenIds: children,
        selectedParent: selectedParents.includes(index),
        selected: selectedIndex === index,
        requestFolderProps: createFolderProps,
        isConstant,
      };
    },
    [selectedIndex, selectedParents, folders, classes],
  );

  return createFolderProps;
}
