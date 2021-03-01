import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Badge.styles";

const useStyles = createUseStyles(styles);

const Badge = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div className={classes.badge}>{children}</div>;
};

export default Badge;
