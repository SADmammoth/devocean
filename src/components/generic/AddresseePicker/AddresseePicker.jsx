import React from "react";
import { Input as ReakitInput } from "reakit";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./AddresseePicker.styles";

const useStyles = createUseStyles(styles);

const AddresseePicker = ({ ...props }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  //TODO Placeholder for addressee picker

  return (
    <div className={classes.inputContainer}>
      <ReakitInput {...props} className={classNames(props.className)} />
    </div>
  );
};

export default AddresseePicker;
