import React from "react";
import Button from "../Button";
import StackLayout from "../layouts/StackLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Popup.styles";
import classNames from "classnames";

const useStyles = createUseStyles(styles);

const Popup = ({
  className,
  children,
  showSubmitButton,
  submitText,
  closeSelf,
}) => {
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
};

export default Popup;
