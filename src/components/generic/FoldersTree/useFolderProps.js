import { useCallback } from "react";

export default function useFolderProps(
  folders,
  classes,
  selectedIndex,
  selectedParents,
  onClickFolder,
  FolderBase
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
        as: FolderBase,
        type: !!tasks ? "list" : "folder",
        name,
        onClick: onClickFolder,
        childrenIds: children,
        selectedParent: selectedParents.includes(index),
        selected: selectedIndex === index,
        requestFolderProps: createFolderProps,
        isConstant,
      };
    },
    [selectedIndex, selectedParents, folders, classes]
  );

  return createFolderProps;
}
