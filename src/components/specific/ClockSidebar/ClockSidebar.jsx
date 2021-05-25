import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Clock from '../../generic/Clock';
import Sidebar from '../../generic/Sidebar';
import StackLayout from '../../generic/layouts/StackLayout';

import styles from './ClockSidebar.styles';

const useStyles = createUseStyles(styles);

function ClockSidebar({ className, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Sidebar className={classNames(className, classes.clockSidebar)} {...props}>
      <StackLayout
        className={classes.content}
        orientation="vertical"
        alignX="center">
        <Clock city="Belarus, Minsk" size="big" />
      </StackLayout>
    </Sidebar>
  );
}

ClockSidebar.propTypes = {
  className: PropTypes.string,
};

export default ClockSidebar;
