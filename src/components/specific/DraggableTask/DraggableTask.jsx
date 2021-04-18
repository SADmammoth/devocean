import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import DraggableElement from "../../generic/DraggableElement";
import TaskCard from "../TaskCard";
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
    <TaskCard
      id={id}
      estimate={estimate}
      reportedTime={reportedTime}
      {...taskProps}
    />
  );
  const avatar = (
    <TaskCard
      id={id}
      className={classes.avatar}
      estimate={estimate}
      reportedTime={reportedTime}
      {...taskProps}
    />
  );

  const duration =
    estimate && reportedTime
      ? estimate.getHours() - reportedTime.getHours()
      : 1;

  return (
    <DraggableElement
      draggableType="task"
      id={id}
      height={duration}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      content={content}
      avatar={avatar}
      data={taskProps}
    />
  );
};

export default DraggableTask;
