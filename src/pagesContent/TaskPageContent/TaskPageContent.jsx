import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable } from 'recoil';

import Sidebar from '../../components/generic/Sidebar';
import GridLayout from '../../components/generic/layouts/GridLayout';
import StackLayout from '../../components/generic/layouts/StackLayout';
import StateMonade from '../../helpers/StateMonade';
import { tasksState_requestContent } from '../../recoil/states/tasksState';
import TaskContent from './TaskContent';
import TaskSidebar from './TaskSidebar';

import styles from './TaskPageContent.styles';

const useStyles = createUseStyles(styles);

function TaskPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const fullTask = useRecoilValueLoadable(tasksState_requestContent(id));

  const {
    title,
    customFields,
    priority,
    assignee,
    status,
    estimate,
    reportedTime,
  } = fullTask.contents || {};

  return (
    <GridLayout className={classes.content}>
      <Sidebar className={classes.paddingTop} column={3}>
        <StateMonade state={fullTask.state} onError={() => fullTask.contents}>
          <TaskSidebar
            id={id}
            title={title}
            classes={classes}
            priority={priority}
            assignee={assignee}
            status={status}
            estimate={estimate}
            reportedTime={reportedTime}
          />
        </StateMonade>
      </Sidebar>
      <StackLayout
        className={classes.paddingTop}
        column={5}
        orientation="vertical"
        alignY="start">
        <StateMonade state={fullTask.state} onError={() => fullTask.contents}>
          <TaskContent
            classes={classes}
            title={title}
            customFields={customFields}
          />
        </StateMonade>
      </StackLayout>
    </GridLayout>
  );
}

TaskPageContent.propTypes = {
  id: PropTypes.string.isRequired,
};

export default TaskPageContent;
