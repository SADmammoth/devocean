import React from "react";
import PropTypes from "prop-types";
import Sidebar from "../../components/generic/Sidebar";
import StackLayout from "../../components/generic/layouts/StackLayout";
import GridLayout from "../../components/generic/layouts/GridLayout";
import StateMonade from "../../helpers/StateMonade";
import { useRecoilValueLoadable } from "recoil";
import { tasksState_requestContent } from "../../recoil/states/tasksState";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./TaskPageContent.styles";
import TaskSidebar from "./TaskSidebar";
import TaskContent from "./TaskContent";

const useStyles = createUseStyles(styles);

function TaskPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const fullTask = useRecoilValueLoadable(tasksState_requestContent(id));

  const {
    title,
    description,
    priority,
    assignee,
    status,
    estimate,
    reportedTime,
  } = fullTask.contents || {};

  return (
    <GridLayout className={classes.content}>
      <Sidebar className={classes.paddingTop} column={3}>
        <StateMonade state={fullTask.state}>
          <TaskSidebar
            id={id}
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
        alignY="start"
      >
        <StateMonade state={fullTask.state}>
          <TaskContent
            classes={classes}
            title={title}
            description={description}
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
