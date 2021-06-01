import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { Input as ReakitInput } from 'reakit';

import customTypes from './customTypes';

import styles from './Input.styles';

const useStyles = createUseStyles(styles);

function Input({ type, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const CustomInput = customTypes[type];
  if (CustomInput) {
    return <CustomInput type={type} {...props} />;
  }

  const as = type === 'textarea' ? 'textarea' : 'input';

  if (type === 'file' || type === 'image')
    return <input type={type} {...props} />;

  return (
    <ReakitInput
      type={type}
      {...props}
      className={classNames(classes.formControl, classes[as], props.className)}
      as={as}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
