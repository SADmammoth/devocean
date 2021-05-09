import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import { DragGrid, elementsTypes } from '@sadmammoth/react-dnd';

import StackLayout from '../../generic/layouts/StackLayout';
import StretchLayout from '../../generic/layouts/StretchLayout';
import DateHeader from './DateHeader';
import HoursHeader from './HoursHeader';
import fillMap from './fillMap';

import styles from './Calendar.styles';

const useStyles = createUseStyles(styles);

function Calendar({ startDate, days, hours, tasks, style, createAvatar }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const renderDays = (startDate, days) => {
    const dates = [];
    let buff;
    for (let i = 0; i < days; i++) {
      buff = new Date(startDate);
      buff.setDate(startDate.getDate() + i);
      dates.push(buff);
    }

    return dates.map((date) => {
      return <DateHeader date={date} />;
    });
  };

  const renderHours = (startDate, hours) => {
    const dates = [];
    let buff;
    for (let i = 0; i < hours; i++) {
      buff = new Date(startDate);
      buff.setHours(startDate.getHours() + i);
      dates.push(buff);
    }

    return dates.map((date) => {
      return <HoursHeader date={date} />;
    });
  };

  const hoursArray = renderHours(startDate, hours);

  const [tasksState, setTasks] = useState(tasks);

  useEffect(() => {
    setTasks(tasks);
  }, [tasks]);

  return (
    <StackLayout style={style}>
      <DragGrid
        className={classes.calendar}
        map={[
          <div></div>,
          ...renderDays(new Date(), days),
          ...fillMap(
            tasksState.map((task) => {
              return { ...task, className: classes.droparea };
            }),
            days,
            hours,
            classes.droparea,
          )
            .map((item, i) => {
              if (i % days === 0) return [hoursArray[i / days], item];
              return item;
            })
            .flat(),
        ]}
        columns={days + 1}
        rows={hours + 1}
        createAvatar={createAvatar}
        hiddenClass={classes.hidden}
      />
    </StackLayout>
  );
}

Calendar.propTypes = {};

export default Calendar;
