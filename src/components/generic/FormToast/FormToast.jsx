import React, { useCallback, useEffect, useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { FaTimesCircle } from 'react-icons/fa';
import { useTheme, createUseStyles } from 'react-jss';

import Text from '../Text';
import StackLayout from '../layouts/StackLayout';

import styles from './FormToast.styles';

const useStyles = createUseStyles(styles);

function FormToast({ type, message, onClose }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const [close, setClose] = useState(false);

  const closeHandler = useCallback(() => {
    setClose(true);
    setTimeout(() => {
      setClose(false);
      onClose();
    }, 150);
  }, [onClose]);

  const [timeout, saveTimeout] = useState(null);

  useEffect(() => {
    if (!timeout) {
      saveTimeout(
        setTimeout(() => {
          closeHandler();
        }, 3000),
      );
    }
    return () => clearTimeout(timeout);
  }, [timeout]);

  return (
    <StackLayout
      as="article"
      className={classNames(classes.toast, { [classes.closing]: close })}
      alignY="center"
      alignX="spaceBetween">
      <Text type="common">{message}</Text>
      <button
        className={classes.button}
        onClick={() => {
          closeHandler();
        }}>
        <FaTimesCircle />
      </button>
    </StackLayout>
  );
}

FormToast.propTypes = {};

export default FormToast;
