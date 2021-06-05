import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { Button as ReakitButton } from 'reakit';

import sizes from './sizes';

import styles from './Button.styles';

const useStyles = createUseStyles(styles);

const Button = ({ className, type, onClick, children, size, label, props }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ReakitButton
      type={type}
      className={classNames(className, classes.button, classes[sizes[size]])}
      onClick={onClick}
      aria-label={label}
      {...props}>
      {children}
    </ReakitButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

Button.defaultProps = {
  type: 'button',
  size: 'common',
};

export default Button;
