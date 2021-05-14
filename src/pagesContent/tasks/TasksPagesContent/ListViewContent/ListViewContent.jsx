import React, { useEffect, useState } from 'react';

import { FaFolderPlus, FaPlusCircle } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil';

import ExpandableToolBar from '../../../../components/generic/ExpandableToolBar';
import FoldersTree from '../../../../components/generic/FoldersTree';
import Sidebar from '../../../../components/generic/Sidebar';
import Text from '../../../../components/generic/Text';
import GridLayout from '../../../../components/generic/layouts/GridLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
import FeatureDependentToolbar from '../../../../components/specific/FeatureDependentToolbar/FeatureDependentToolbar';
import TaskFolderButton from '../../../../components/specific/TaskFolderButton';
import StateMonade from '../../../../helpers/components/StateMonade';
import useLocale from '../../../../helpers/hooks/useLocale';
import folderTreeState from '../../../../recoil/states/folderTreeState';
import TaskViewSwitch from '../TaskViewSwitch/TaskViewSwitch';
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

  return (
    <>
      <GridLayout className={classes.grid}>
        <Sidebar column={3} className={classes.paddingTop}>
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
        </Sidebar>
        <StackLayout
          orientation="vertical"
          column={7}
          alignY="start"
          className={classes.paddingTop}>
          <Text type="h1">{locale('TaskList')}</Text>
          <StateMonade state={!!currentFolderId}>
            <ListViewTasks folderId={currentFolderId} />
          </StateMonade>
        </StackLayout>
        <FeatureDependentToolbar
          expandable
          items={{
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
                label: <TaskViewSwitch currentView="list" />,
                title: 'Switch view',
                id: 'switch-view',
              },
            ],
          }}
        />
      </GridLayout>
    </>
  );
};

export default ListViewContent;
