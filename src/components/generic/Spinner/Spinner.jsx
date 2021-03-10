import React from "react";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Spinner.styles";

const useStyles = createUseStyles(styles);

const Spinner = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div
      className={classNames(classes.spinner, classes.centered)}
      aria-busy="true"
      aria-live="polite"
    />
  );
};

export default Spinner;
