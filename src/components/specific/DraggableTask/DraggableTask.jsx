import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import DraggableElement from '../../generic/DraggableElement';
import TaskCard from '../TaskCard';

import styles from './DraggableTask.styles';

const useStyles = createUseStyles(styles);

function DraggableTask({
  id,
  estimate,
  reportedTime,
  onDragStart,
  onDragEnd,
  index,
  ...taskProps
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const content = (
    <TaskCard
      index={index}
      id={id}
      estimate={estimate}
      reportedTime={reportedTime}
      {...taskProps}
    />
  );
  const avatar = (
    <TaskCard
      index={index}
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
      className={classes.draggableTask}
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
}

DraggableTask.propTypes = {
  id: PropTypes.string,
  estimate: PropTypes.object,
  reportedTime: PropTypes.object,
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func,
};

export default DraggableTask;
