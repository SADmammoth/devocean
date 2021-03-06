import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Button from '../Button';
import StackLayout from '../layouts/StackLayout';

import styles from './Popup.styles';

const useStyles = createUseStyles(styles);

function Popup({
  className,
  children,
  showSubmitButton,
  submitText,
  closeSelf,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <StackLayout className={classNames(classes.popup, className)}>
      {children}
      {showSubmitButton ? (
        <Button onClick={closeSelf}>{submitText}</Button>
      ) : null}
    </StackLayout>
  );
}

Popup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  showSubmitButton: PropTypes.bool,
  submitText: PropTypes.string,
  closeSelf: PropTypes.func.isRequired,
};

export default Popup;
