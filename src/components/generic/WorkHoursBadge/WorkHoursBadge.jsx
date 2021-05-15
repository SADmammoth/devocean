import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Text from '../Text';
import HoursBadge from './HoursBadge';

import styles from './WorkHoursBadge.styles';

const useStyles = createUseStyles(styles);

function WorkHoursBadge({ type, start, end }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  if (type === 'flexible') return <Text>Flexible hours</Text>;

  return (
    <div>
      <HoursBadge hours={start} /> &ndash; <HoursBadge hours={end} />
    </div>
  );
}

WorkHoursBadge.propTypes = {};

export default WorkHoursBadge;
