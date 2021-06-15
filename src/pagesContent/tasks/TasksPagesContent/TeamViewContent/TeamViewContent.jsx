import React, { useCallback } from 'react';

import classNames from 'classnames';
import { FaPlusCircle, FaTable } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable } from 'recoil';

import ExpandableToolBar from '../../../../components/generic/ExpandableToolBar';
import Sidebar from '../../../../components/generic/Sidebar';
import GridLayout from '../../../../components/generic/layouts/GridLayout';
import ScrollLayout from '../../../../components/generic/layouts/ScrollLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
import FeatureDependentToolbar from '../../../../components/specific/FeatureDependentToolbar/FeatureDependentToolbar';
import StateMonade from '../../../../helpers/components/StateMonade';
import getTaskViewMenu from '../../../../helpers/functions/getTaskViewMenu';
import useLocale from '../../../../helpers/hooks/useLocale';
import TitledPage from '../../../../layouts/TitledPage';
import teammatesState from '../../../../recoil/states/teammatesState';
import TaskViewSwitch from '../TaskViewSwitch/TaskViewSwitch';
import TeammateTasksList from './TeammateTasksList';

import styles from './TeamViewContent.styles';

const useStyles = createUseStyles(styles);

const TeamViewContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const teammatesTasks = useRecoilValueLoadable(teammatesState);

  const renderLists = useCallback(() => {
    const { unassigned, ...list } = teammatesTasks.contents;

    return Object.entries(list)
      .filter(([, value]) => {
        return !!value?.assignedTasks?.length;
      })
      .map(([id, { displayName, avatar, assignedTasks }]) => {
        return (
          <TeammateTasksList
            id={id}
            displayName={displayName}
            tasks={assignedTasks || []}
            avatar={avatar}
          />
        );
      });
  }, [teammatesTasks.contents]);

  const { unassigned } = teammatesTasks.contents;
  const locale = useLocale();

  const sidebar = (
    <StateMonade state={teammatesTasks.state}>
      <TeammateTasksList
        tasks={unassigned?.assignedTasks}
        avatar={unassigned?.avatar}
      />
    </StateMonade>
  );
  const toolbar = {
    manageTasks: [
      {
        label: <FaPlusCircle />,
        title: locale('Add new task'),
        link: '/tasks/new',
        id: 'new-task',
      },
    ],
    all: [
      {
        label: <FaTable />,
        menu: getTaskViewMenu('team'),
        title: locale('Switch view'),
        id: 'switch-view',
      },
    ],
  };

  return (
    <TitledPage
      title={locale('Tasks by assignees')}
      sidebarTitle={locale('Unassigned')}
      sidebarContent={sidebar}
      toolbarItems={toolbar}>
      <ScrollLayout
        orientation="horizontal"
        scrollOrientation="horizontal"
        blockSnapType="start"
        gap="15px"
        className={classNames(classes.scrollArea)}
        nowrap>
        <StateMonade state={teammatesTasks.state}>{renderLists()}</StateMonade>
      </ScrollLayout>
    </TitledPage>
  );
};

export default TeamViewContent;
