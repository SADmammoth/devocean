import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import { FaFolderPlus, FaPlusCircle, FaTable } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil';

import FoldersTree from '../../../../components/generic/FoldersTree';
import TaskFolderButton from '../../../../components/specific/TaskFolderButton';
import StateMonade from '../../../../helpers/components/StateMonade';
import getTaskViewMenu from '../../../../helpers/functions/getTaskViewMenu';
import useLocale from '../../../../helpers/hooks/useLocale';
import TitledPage from '../../../../layouts/TitledPage/TitledPage';
import folderTreeState from '../../../../recoil/states/folderTreeState';
import ListViewTasks from './ListViewTasks';
import currentFolderState from './localState/currentFolderState';

import styles from './ListViewContent.styles';

const useStyles = createUseStyles(styles);

const ListViewContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const folders = useRecoilValueLoadable(folderTreeState);

  const [currentFolder, setCurrentFolder] = useRecoilStateLoadable(
    currentFolderState,
  );

  const [currentFolderId, setCurrentFolderId] = useState();

  useEffect(() => {
    if (folders.state === 'hasValue') {
      setCurrentFolderId(folders.contents[currentFolder.contents]?.id);
    }
  }, [folders, currentFolder]);

  const locale = useLocale();

  const sidebar = (
    <StateMonade state={folders.state}>
      <FoldersTree
        className={classes.folders}
        folders={folders.contents}
        onSelectedChange={(index) => {
          setCurrentFolder(index);
        }}
        FolderBase={TaskFolderButton}
      />
    </StateMonade>
  );

  const toolbar = {
    manageTasks: [
      {
        label: <FaPlusCircle />,
        title: 'Add new task',
        link: '/tasks/new',
        id: 'new-task',
      },
    ],
    manageCollections: [
      {
        label: <FaFolderPlus />,
        title: 'Add task collection',
        link: '/collections/new',
        id: 'add-collection',
      },
    ],
    all: [
      {
        label: <FaTable />,
        menu: getTaskViewMenu('list'),
        title: 'Switch view',
        id: 'switch-view',
      },
    ],
  };

  return (
    <TitledPage
      title={locale('TaskList')}
      sidebarContent={sidebar}
      toolbarItems={toolbar}>
      <StateMonade state={!!currentFolderId}>
        <ListViewTasks folderId={currentFolderId} />
      </StateMonade>
    </TitledPage>
  );
};

export default ListViewContent;
