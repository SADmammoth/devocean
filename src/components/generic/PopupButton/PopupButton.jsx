import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import Button from '../Button';
import Popup from '../Popup';
import positions from './positions';

import styles from './PopupButton.styles';

const useStyles = createUseStyles(styles);

function PopupButton({
  buttonContent,
  children,
  showSubmitButton,
  submitText,
  position,
  backdrop,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [show, setShow] = useState(false);

  const backdropPress = () => {
    setShow(false);
    document.removeEventListener('click', backdropPress);
  };

  useEffect(() => {
    if (backdrop && show) {
      document.addEventListener('click', backdropPress);
    }

    return () => {
      document.removeEventListener('click', backdropPress);
    };
  }, [show]);

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        size="fluid"
        onClick={() => {
          setShow((show) => !show);
        }}>
        {buttonContent}
      </Button>
      {show ? (
        <Popup
          className={classes[`${positions[position]}Popup`]}
          showSubmitButton={showSubmitButton}
          submitText={submitText}
          closeSelf={() => setShow(false)}>
          {children}
        </Popup>
      ) : null}
    </div>
  );
}

PopupButton.propTypes = {
  buttonContent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  showSubmitButton: PropTypes.bool,
  submitText: PropTypes.string,
  position: PropTypes.oneOf(Object.keys(positions)),
  backdrop: PropTypes.bool,
};

PopupButton.defaultProps = {
  backdrop: true,
};

export default PopupButton;
