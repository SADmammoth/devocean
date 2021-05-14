import React, { useCallback } from 'react';

import { FaPlusCircle } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable } from 'recoil';

import ExpandableToolBar from '../../../../components/generic/ExpandableToolBar';
import Sidebar from '../../../../components/generic/Sidebar';
import GridLayout from '../../../../components/generic/layouts/GridLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
import FeatureDependentToolbar from '../../../../components/specific/FeatureDependentToolbar/FeatureDependentToolbar';
import StateMonade from '../../../../helpers/components/StateMonade';
import useLocale from '../../../../helpers/hooks/useLocale';
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

    return Object.entries(list).map(
      ([id, { displayName, avatar, assignedTasks }]) => {
        return (
          <TeammateTasksList
            id={id}
            displayName={displayName}
            tasks={assignedTasks || []}
            avatar={avatar}
          />
        );
      },
    );
  }, [teammatesTasks.contents]);

  const { unassigned } = teammatesTasks.contents;
  const locale = useLocale();

  return (
    <GridLayout className={classes.grid}>
      <Sidebar
        column={3}
        title={locale('Unassigned')}
        className={classes.paddingTop}>
        <StateMonade state={teammatesTasks.state}>
          <TeammateTasksList
            tasks={unassigned?.assignedTasks}
            avatar={unassigned?.avatar}
          />
        </StateMonade>
      </Sidebar>
      <StackLayout
        column={7}
        orientation="horizontal"
        gap="30px"
        className={classes.paddingTop}
        scroll>
        <StateMonade state={teammatesTasks.state}>{renderLists()}</StateMonade>
      </StackLayout>
      <FeatureDependentToolbar
        items={{
          manageTasks: [
            {
              label: <FaPlusCircle />,
              title: 'Add new task',
              link: '/tasks/new',
              id: 'new-task',
            },
          ],
          all: [
            {
              label: <TaskViewSwitch currentView="team" />,
              title: 'Switch view',
              id: 'switch-view',
            },
          ],
        }}
      />
    </GridLayout>
  );
};

export default TeamViewContent;
