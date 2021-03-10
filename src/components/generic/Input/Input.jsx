import React from "react";
import classNames from "classnames";
import { Input as ReakitInput } from "reakit";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Input.styles";

const useStyles = createUseStyles(styles);

const Input = ({ type, ...props }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const as = type === "textarea" ? "textarea" : "input";

  return (
    <div className={classes.inputContainer}>
      <ReakitInput
        {...props}
        className={classNames(classes[as], props.className)}
        as={as}
      />
    </div>
  );
};

export default Input;
