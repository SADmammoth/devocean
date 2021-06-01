import React, { useEffect, useState, useMemo } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';

import dateToString from '../../../helpers/converters/dateToString';
import clockUpdater from './clockUpdater';
import { months, weekdays } from './enums';
import sizes from './sizes';

import styles from './DateTime.styles';

const useStyles = createUseStyles(styles);

function DateTime({ size }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [minutesUpdater] = useState(clockUpdater());
  const [date, setDate] = useState({
    minutes: 0,
    hours: 0,
    day: 0,
    month: 0,
  });

  const updateDateTime = (date) => {
    setDate({
      month: date.getMonth() + 1,
      day: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
    });
  };

  useEffect(() => {
    minutesUpdater.start(updateDateTime);
    return () => {
      minutesUpdater.stop();
    };
  }, [minutesUpdater]);

  const weekday = useMemo(() => {
    const index = new Date(
      new Date().getFullYear(),
      date.month - 1,
      date.day,
    ).getDay();

    return weekdays[index];
  }, [date]);

  return (
    <time
      className={classNames(classes.dateTime, classes[size])}
      dateTime={dateToString(date)}>
      <div className={classes.time}>
        <span>{date.hours.toString().padStart(2, '0')}</span>
        <span className={classes.blinking}>:</span>
        <span>{date.minutes.toString().padStart(2, '0')}</span>
      </div>
      <hr className={classes.divider} />
      <div className={classes.date}>
        <span>{`${weekday}, ${months[date.month - 1]} ${date.day}`}</span>
      </div>
    </time>
  );
}

DateTime.propTypes = {
  size: PropTypes.oneOf(sizes),
};

DateTime.defaultProps = {
  size: 'small',
};

export default DateTime;
