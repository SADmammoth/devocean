import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Container.styles";

const useStyles = createUseStyles(styles);

const Container = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div class={classes.container}>{children}</div>;
};

export default Container;
