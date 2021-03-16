import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import DraggableElement from "../../generic/DraggableElement/DraggableElement";
import TaskContent from "../TaskContent/TaskContent";
import styles from "./DraggableTask.styles";

const useStyles = createUseStyles(styles);

const DraggableTask = ({
  id,
  estimate,
  reportedTime,
  onDragStart,
  onDragEnd,
  ...taskProps
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const content = (
    <TaskContent
      estimate={estimate}
      reportedTime={reportedTime}
      {...taskProps}
    />
  );
  const avatar = (
    <TaskContent
      className={classes.avatar}
      estimate={estimate}
      reportedTime={reportedTime}
      {...taskProps}
    />
  );

  return (
    <DraggableElement
      draggableType="task"
      id={id}
      height={estimate.getHours() - reportedTime.getHours() || 1}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      content={content}
      avatar={avatar}
      data={taskProps}
    />
  );
};

export default DraggableTask;
