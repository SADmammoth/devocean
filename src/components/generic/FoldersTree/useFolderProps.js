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
        index = 0;
      }

      const { id, name, children, tasks, isConstant, parent } = folders[index];

      return {
        id,
        index,
        classes,
        FolderBase,
        type: !!tasks ? 'list' : 'folder',
        name,
        selectFolder,
        childrenIds: children,
        selectedParent: selectedParents.includes(id),
        selected: selectedIndex === index,
        requestFolderProps: createFolderProps,
        isConstant,
        parent,
      };
    },
    [selectedIndex, selectedParents, folders, classes],
  );

  return createFolderProps;
}
