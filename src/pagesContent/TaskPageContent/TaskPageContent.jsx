import React, { useCallback } from "react";
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

const TaskPageContent = ({ id }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const fullTask = useRecoilValueLoadable(tasksState_requestContent(id));

  return (
    <GridLayout className={classes.content}>
      <Sidebar className={classes.paddingTop} column={3}>
        <StateMonade state={fullTask.state}>
          <TaskSidebar classes={classes} fullTask={fullTask.contents} />
        </StateMonade>
      </Sidebar>
      <StackLayout
        className={classes.paddingTop}
        column={5}
        orientation="vertical"
        alignY="start"
      >
        <StateMonade state={fullTask.state}>
          <TaskContent classes={classes} fullTask={fullTask.contents} />
        </StateMonade>
      </StackLayout>
    </GridLayout>
  );
};

export default TaskPageContent;
