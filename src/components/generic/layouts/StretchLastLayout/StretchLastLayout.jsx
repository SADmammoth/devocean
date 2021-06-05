import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import StackLayout from '../StackLayout';

import styles from './StretchLastLayout.styles';

const useStyles = createUseStyles(styles);

function StretchLastLayout({
  className,
  children,
  orientation,
  reverse,
  ...props
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const alignment =
    orientation === 'vertical'
      ? { alignY: reverse ? 'end' : 'start' }
      : { alignX: reverse ? 'end' : 'start' };

  return (
    <StackLayout
      className={classNames(
        classes.stretchLast,
        className,
        classes[orientation],
        {
          [classes.reversed]: !!reverse,
          [classes.normal]: !reverse,
        },
      )}
      orientation={orientation}
      {...props}
      {...alignment}>
      {children}
    </StackLayout>
  );
}

StretchLastLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  reverse: PropTypes.bool,
};

StretchLastLayout.defaultProps = {
  reverse: false,
};

export default StretchLastLayout;
