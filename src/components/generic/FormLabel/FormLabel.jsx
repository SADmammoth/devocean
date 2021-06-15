import React, { useCallback, useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Text from '../Text';
import TitledBorder from '../TitledBorder/TitledBorder';

import styles from './FormLabel.styles';

const useStyles = createUseStyles(styles);

function FormLabel({ className, children, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [invalid, setInvalid] = useState();
  useEffect(() => {
    const invalid = document
      .getElementById(props.htmlFor)
      ?.classList.contains('invalid');
    setInvalid(invalid);
    if (invalid)
      setTimeout(() => {
        setInvalid(false);
      }, 500);
  });

  return (
    <TitledBorder
      title={children}
      labelProps={props}
      borderClassName={classNames(classes.border, {
        [classes.invalid]: invalid,
      })}
      containerClassName={classNames(className, classes.formLabel)}
    />
  );
}

FormLabel.propTypes = {};

export default FormLabel;
