import React, { useCallback, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import useLocale from '../../../helpers/hooks/useLocale';
import Button from '../Button';
import Folder from './Folder';
import useFolderProps from './useFolderProps';
import useSelectedFolder from './useSelectedFolder';

import styles from './FoldersTree.styles';

const useStyles = createUseStyles(styles);

function FoldersTree({ className, folders, onSelectedChange, FolderBase }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [selectedIndex, selectedParents, selectFolder] = useSelectedFolder(
    folders,
  );

  useEffect(() => {
    onSelectedChange(selectedIndex);
  }, [selectedIndex]);

  const createFolderProps = useFolderProps(
    folders,
    classes,
    selectedIndex,
    selectedParents,
    selectFolder,
    FolderBase,
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
    <div className={className} aria-label={locale('Folders')}>
      {folders && folders.length ? renderFolders() : 'No folders'}
    </div>
  );
}

FoldersTree.propTypes = {
  className: PropTypes.string,
  folders: PropTypes.array.isRequired,
  onSelectedChange: PropTypes.func.isRequired,
};

export default FoldersTree;
