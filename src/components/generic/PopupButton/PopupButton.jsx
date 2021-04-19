import React, { useState } from "react";
import PropTypes from "prop-types";
import Popup from "../Popup";
import { useTheme, createUseStyles } from "react-jss";
import Button from "../Button";
import styles from "./PopupButton.styles";
import positions from "./positions";

const useStyles = createUseStyles(styles);

function PopupButton({
  buttonContent,
  children,
  showSubmitButton,
  submitText,
  position,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [show, setShow] = useState(false);

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        size="fluid"
        onClick={() => {
          setShow((show) => !show);
        }}
      >
        {buttonContent}
      </Button>
      {show ? (
        <Popup
          className={classes[`${positions[position]}Popup`]}
          showSubmitButton={showSubmitButton}
          submitText={submitText}
          closeSelf={() => setShow(false)}
        >
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
};

export default PopupButton;
