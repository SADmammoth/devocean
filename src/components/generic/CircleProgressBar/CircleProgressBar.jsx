import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import StackLayout from '../layouts/StackLayout';

import styles from './CircleProgressBar.styles';

const useStyles = createUseStyles(styles);

function CircleProgressBar({
  progress,
  children,
  backgroundColor,
  foregroundColor,
  backdropColor,
  size,
  width,
}) {
  const theme = useTheme();
  const classes = useStyles({
    ...theme,
    size: size,
    width: width,
    progress: progress * 100,
    progressbarBackdrop: backdropColor || theme.background.dark,
    progressbarBackground: backgroundColor || theme.background.common,
    progressbarForeground: foregroundColor || theme.text.highlighted,
  });

  return (
    <StackLayout
      className={classes.progressbar}
      alignX="center"
      alignY="center">
      <div className={classes.content}>{children}</div>
    </StackLayout>
  );
}

CircleProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  backdropColor: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
};

CircleProgressBar.defaultProps = {
  size: '50px',
  width: '10px',
};

export default CircleProgressBar;
