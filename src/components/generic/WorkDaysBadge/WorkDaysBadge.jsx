import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import StackLayout from '../layouts/StackLayout';
import WorkDayBadge from './WorkDayBadge';

import styles from './WorkDaysBadge.styles';

const useStyles = createUseStyles(styles);

function WorkDaysBadge({ days }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const allDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  const renderDay = (day) => {
    const isActive = days.includes(day);
    return (
      <WorkDayBadge classes={classes} isActive={isActive}>
        {day}
      </WorkDayBadge>
    );
  };

  return <StackLayout gap="5px">{allDays.map(renderDay)}</StackLayout>;
}

WorkDaysBadge.propTypes = {};

export default WorkDaysBadge;
