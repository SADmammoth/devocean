import React, { useState } from "react";

import Popup from "../Popup";

import { useTheme, createUseStyles } from "react-jss";
import Button from "../Button";
import styles from "./PopupButton.styles";

const useStyles = createUseStyles(styles);

const PopupButton = ({
  buttonContent,
  children,
  showSubmitButton,
  submitText,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShow((show) => !show);
        }}
      >
        {buttonContent}
      </Button>
      {show ? (
        <Popup
          showSubmitButton={showSubmitButton}
          submitText={submitText}
          closeSelf={() => setShow(false)}
        >
          {children}
        </Popup>
      ) : null}
    </>
  );
};

export default PopupButton;
