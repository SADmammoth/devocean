import React, { useCallback, useState } from 'react';

import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue } from 'recoil';

import DraggableList from '../../../../components/generic/DraggableList';
import Sidebar from '../../../../components/generic/Sidebar';
import GridLayout from '../../../../components/generic/layouts/GridLayout';
import DraggableTask from '../../../../components/specific/DraggableTask';
import tasksState from '../../../../recoil/states/tasksState';
import TaskCalendar from './TaskCalendar';

import styles from './EventsViewContent.styles';

const useStyles = createUseStyles(styles);

const EventsViewContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const tasks = useRecoilValue(tasksState);

  const [draggableAreaSize, setDraggableAreaSize] = useState();

  const getList = useCallback(() => {
    return tasks
      .map((task) => {
        if (task)
          return (
            <DraggableTask
              {...task}
              onDragStart={({ height }) => {
                setDraggableAreaSize(height);
              }}
              onDragEnd={() =>
                setDraggableAreaSize(theme.draggableAreaDefaultSize)
              }
            />
          );
      })
      .filter((item) => !!item);
  }, [tasks]);

  return (
    <GridLayout className={classes.content}>
      <Sidebar column={3} className={classes.paddingTop}>
        {/* <DraggableList
          list={getList()}
          draggableType="task"
          draggableAreaSize={draggableAreaSize}
          onNewItem={({ id: taskId, assignee }) => {
            if (assignee) removeTask({ taskId, teammateId: assignee });
            addTask(taskId);
          }}/> */}
      </Sidebar>
      <TaskCalendar column={8} className={classes.marginTop} />
    </GridLayout>
  );
};

export default EventsViewContent;
