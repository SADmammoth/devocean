import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useLocale from "../../../helpers/useLocale";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./FoldersTree.styles";
import Folder from "./Folder";
import Button from "../Button";
import useFolderProps from "./useFolderProps";
import useSelectedFolder from "./useSelectedFolder";

const useStyles = createUseStyles(styles);

function FoldersTree({ className, folders, onSelectedChange }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const FolderBase = (props) => <Button size="wide" {...props} />;

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

  const locale = useLocale();

  return (
    <div className={className} aria-label={locale("Folders")}>
      {folders && folders.length ? renderFolders() : "No folders"}
    </div>
  );
}

FoldersTree.propTypes = {
  className: PropTypes.string,
  folders: PropTypes.array.isRequired,
  onSelectedChange: PropTypes.func.isRequired,
};

export default FoldersTree;
