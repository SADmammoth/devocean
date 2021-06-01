import React, { useCallback, useState } from 'react';

import classNames from 'classnames';
import { FaPlusCircle, FaTable } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable } from 'recoil';

import Button from '../../../../components/generic/Button';
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
import { statusesState_getWithTasks } from '../../../../recoil/states/statusesState';
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

  const sidebar = (
    <StateMonade state={statuses.state}>
      <KanbanStatusList
        classes={classes}
        status="backlog"
        tasks={backlog || []}
        showTitle={false}></KanbanStatusList>
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
    all: [
      {
        label: <FaTable />,
        menu: getTaskViewMenu('kanban'),
        title: 'Switch view',
        id: 'switch-view',
      },
    ],
  };

  return (
    <TitledPage
      title={'Kanban board'}
      sidebarTitle={locale('backlog')}
      sidebarContent={sidebar}
      toolbarItems={toolbar}>
      <ScrollLayout
        className={classNames(classes.scrollArea)}
        orientation="horizontal"
        scrollOrientation="horizontal"
        blockSnapType="start"
        gap="15px"
        nowrap>
        <StateMonade state={statuses.state}>
          {renderStatusesLists()}
          {/* <Button onClick={() => setShowAddStatus((state) => !state)}>
            Add status
          </Button> */}
          {/* {showAddStatus ? (
            <AddStatusForm
              onSubmit={() => setShowAddStatus(false)}></AddStatusForm>
          ) : null} */}
        </StateMonade>
      </ScrollLayout>
    </TitledPage>
  );
};

export default KanbanViewContent;
