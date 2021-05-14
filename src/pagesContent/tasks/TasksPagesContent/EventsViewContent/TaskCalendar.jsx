import React from 'react';

import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';

import { elementsTypes } from '@sadmammoth/react-dnd';

import Calendar from '../../../../components/specific/Calendar';
import DraggableTask from '../../../../components/specific/DraggableTask';
import { tasksState_getEvents } from '../../../../recoil/states/tasksState';

function TaskCalendar({ style }) {
  const tasks = useRecoilValue(tasksState_getEvents);

  const renderTask = (data) => {
    return <DraggableTask {...data} />;
  };

  return (
    <Calendar
      days={5}
      hours={5}
      style={style}
      startDate={new Date()}
      tasks={tasks.map((task, i) => {
        return {
          type: elementsTypes.avatar,
          avatar: renderTask(task),
          height: task.estimate.getHours(),
          index: { x: 0, y: i },
        };
      })}
      createAvatar={renderTask}></Calendar>
  );
}

TaskCalendar.propTypes = {};

export default TaskCalendar;
