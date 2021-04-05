import React from "react";
import Button from "../Button";
import StackLayout from "../layouts/StackLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Popup.styles";

const useStyles = createUseStyles(styles);

const Popup = ({ children, showSubmitButton, submitText, closeSelf }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <StackLayout>
      <div>{children}</div>
      {showSubmitButton ? (
        <Button onClick={closeSelf}>{submitText}</Button>
      ) : null}
    </StackLayout>
  );
};

export default Popup;
