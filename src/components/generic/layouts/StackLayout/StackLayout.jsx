import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import StackItems from './StackItems';
import { aligns, orientations } from './maps';
import orientationPrefix from './orientationPrefix';

import styles from './StackLayout.styles';

const useStyles = createUseStyles(styles);

const StackLayout = ({
  className,
  children,
  orientation,
  alignX,
  alignY,
  gap,
  style,
  scroll,
  as,
  nowrap,
  ...other
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const orientationClass = orientations[orientation];
  const alignYClass = orientationPrefix(orientationClass, aligns[alignY], 'Y');
  const alignXClass = orientationPrefix(orientationClass, aligns[alignX], 'X');

  const RenderTag = as;

  return (
    <RenderTag
      className={classNames(
        className,
        classes.stack,
        classes[orientationClass],
        classes[alignYClass],
        classes[alignXClass],
        { [classes.scroll]: scroll, [classes.nowrap]: nowrap },
      )}
      style={{ ...style, '--gap': gap }}
      {...other}>
      <StackItems classes={classes} orientation={orientation}>
        {children}
      </StackItems>
    </RenderTag>
  );
};

StackLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  orientation: PropTypes.oneOf(Object.keys(orientations)),
  alignY: PropTypes.oneOf(Object.keys(aligns)),
  alignX: PropTypes.oneOf(Object.keys(aligns)),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  scroll: PropTypes.bool,
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  nowrap: PropTypes.bool,
};

StackLayout.defaultProps = {
  orientation: 'horizontal',
  alignY: 'stretch',
  alignX: 'stretch',
  scroll: false,
  as: 'div',
  nowrap: false,
};

export default StackLayout;
