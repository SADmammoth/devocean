import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Marked.styles";

const useStyles = createUseStyles(styles);

const Marked = (child) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div className={classes.adornment}>{child}</div>;
};

export default Marked;
