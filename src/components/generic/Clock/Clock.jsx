import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import DateTime from '../DateTime';

import styles from './Clock.styles';

const useStyles = createUseStyles(styles);

function Clock({ city, size }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classNames(classes.clock, classes[size])}>
      {/* <p className={classes.cityText}>{city}</p> */}
      <DateTime size={size} />
    </div>
  );
}

Clock.propTypes = {
  city: PropTypes.string,
  size: PropTypes.string,
};

export default Clock;
