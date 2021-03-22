import React, { useCallback, useEffect, useState } from "react";
import { useTheme, createUseStyles } from "react-jss";
import { Composite, useCompositeState } from "reakit";
import styles from "./FoldersTree.styles";
import Folder from "./Folder";
import Button from "../Button";
import useFolderProps from "./useFolderProps";
import useSelectedFolder from "./useSelectedFolder";

const useStyles = createUseStyles(styles);

const FoldersTree = ({ folders, onSelectedChange }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const composite = useCompositeState();

  const FolderBase = (props) => <Button {...props} {...composite} />;

  const [selectedIndex, selectedParents, onClickFolder] = useSelectedFolder(
    folders
  );

  useEffect(() => {
    onSelectedChange(selectedIndex);
  }, [selectedIndex]);

  const createFolderProps = useFolderProps(
    folders,
    classes,
    selectedIndex,
    selectedParents,
    onClickFolder,
    FolderBase
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
