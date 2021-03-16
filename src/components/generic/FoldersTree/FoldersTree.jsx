import React, { useCallback, useEffect, useState } from "react";
import { useTheme, createUseStyles } from "react-jss";
import { Composite, CompositeItem, useCompositeState } from "reakit";
import styles from "./FoldersTree.styles";
import Folder from "./Folder";
import Button from "../Button";

const useStyles = createUseStyles(styles);

const FoldersTree = ({ folders, onSelectedChange }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const composite = useCompositeState();

  const FolderBase = (props) => <Button {...props} {...composite} />;

  const onClickFolder = useCallback(
    (folderId) => {
      const index = folders.findIndex(({ id }) => id === folderId);
      setSelectedIndex(index);
    },
    [folders, selectedIndex]
  );

  useEffect(() => {
    onSelectedChange(selectedIndex);
  }, [selectedIndex]);

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

      const { id, name, children, tasks } = folders[index];

      return {
        id,
        classes,
        as: FolderBase,
        type: !!tasks ? "list" : "folder",
        name,
        onClick: onClickFolder,
        childrenIds: children,
        selected: selectedIndex === index,
        requestFolderProps: createFolderProps,
      };
    },
    [selectedIndex, folders, classes]
  );

  const renderFolders = useCallback(() => {
    let folderProps;
    return folders.map(({ id, parent }, index) => {
      if (!parent) {
        folderProps = createFolderProps(id, index);
        if (folderProps) return <Folder key={id} {...folderProps} />;
      }
    });
  }, [selectedIndex, folders, classes]);

  return (
    <Composite {...composite}>
      {folders && folders.length ? renderFolders() : "No folders"}
    </Composite>
  );
};

export default FoldersTree;
