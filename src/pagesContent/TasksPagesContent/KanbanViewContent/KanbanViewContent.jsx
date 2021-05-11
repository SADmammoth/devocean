import React, { useCallback, useState } from 'react';

import classNames from 'classnames';
import { FaPlusCircle } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable } from 'recoil';

import Button from '../../../components/generic/Button';
import ExpandableToolBar from '../../../components/generic/ExpandableToolBar';
import Sidebar from '../../../components/generic/Sidebar';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import FeatureDependentToolbar from '../../../components/specific/FeatureDependentToolbar/FeatureDependentToolbar';
import StateMonade from '../../../helpers/StateMonade';
import useLocale from '../../../helpers/useLocale';
import { statusesState_getWithTasks } from '../../../recoil/states/statusesState';
import TaskViewSwitch from '../TaskViewSwitch/TaskViewSwitch';
import AddStatusForm from './AddStatusForm';
import KanbanStatusList from './KanbanStatusList';

import styles from './KanbanViewContent.styles';

const useStyles = createUseStyles(styles);

const KanbanViewContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const statuses = useRecoilValueLoadable(statusesState_getWithTasks);

  const locale = useLocale();

  const renderStatusesLists = useCallback(() => {
    const { backlog, ...statusesList } = statuses.contents;
    return Object.entries(statusesList).map(([name, tasks]) => {
      return (
        <KanbanStatusList
          key={name}
          classes={classes}
          status={name}
          tasks={tasks}
        />
      );
    });
  }, [statuses]);

  const { backlog } = statuses.contents;

  const [showAddStatus, setShowAddStatus] = useState(false);

  return (
    <GridLayout className={classNames(classes.grid, classes.paddingTop)}>
      <Sidebar column={3} title={locale('backlog')}>
        <StateMonade state={statuses.state}>
          <KanbanStatusList
            classes={classes}
            status="backlog"
            tasks={backlog || []}
            showTitle={false}></KanbanStatusList>
        </StateMonade>
      </Sidebar>
      <StackLayout
        className={classes.paddingTop}
        column={7}
        orientation="horizontal"
        gap="20px"
        scroll>
        <StateMonade state={statuses.state}>
          {renderStatusesLists()}
          <Button onClick={() => setShowAddStatus((state) => !state)}>
            Add status
          </Button>
          {showAddStatus ? (
            <AddStatusForm
              onSubmit={() => setShowAddStatus(false)}></AddStatusForm>
          ) : null}
        </StateMonade>
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
              label: <TaskViewSwitch currentView="kanban" />,
              title: 'Switch view',
              id: 'switch-view',
            },
          ],
        }}
      />
    </GridLayout>
  );
};

export default KanbanViewContent;
