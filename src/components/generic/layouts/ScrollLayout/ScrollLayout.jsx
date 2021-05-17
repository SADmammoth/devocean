import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import StackLayout from '../StackLayout';

import styles from './ScrollLayout.styles';

const useStyles = createUseStyles(styles);

function ScrollLayout({ orientation, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  if (orientation === 'vertical')
    return (
      <StackLayout orientation="vertical" alignY="start" {...props} scroll />
    );

  return <StackLayout alignX="start" {...props} scroll />;
}

ScrollLayout.propTypes = {};

export default ScrollLayout;
