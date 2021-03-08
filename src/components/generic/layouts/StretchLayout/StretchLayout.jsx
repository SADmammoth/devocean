import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import classNames from "classnames";
import styles from "./StretchLayout.styles";

const useStyles = createUseStyles(styles);

export default function StretchLayout({ className, children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classNames(className, classes.container)}>{children}</div>
  );
}
