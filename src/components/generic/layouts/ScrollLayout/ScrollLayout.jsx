import React, { useRef } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import StackLayout from '../StackLayout';

import styles from './ScrollLayout.styles';

const useStyles = createUseStyles(styles);

function ScrollLayout({
  className,
  orientation = 'horizontal',
  scrollOrientation = 'vertical',
  scrollPaddingStart,
  scrollPaddingEnd,
  blockSnapType = 'end',
  ...props
}) {
  const theme = useTheme();
  const classes = useStyles({
    scrollPaddingStart,
    scrollPaddingEnd,
    blockSnapType,
    ...theme,
  });

  return (
    <StackLayout
      className={classNames(
        classes.scrollArea,
        classes[scrollOrientation + 'Scroll'],
        className,
      )}
      orientation={orientation}
      alignY="start"
      {...props}
    />
  );
}

ScrollLayout.propTypes = {};

export default ScrollLayout;
