import classNames from "classnames";
import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import StackLayout from "../layouts/StackLayout";
import styles from "./Badge.styles";

const useStyles = createUseStyles(styles);

const Badge = ({ className, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <StackLayout
      alignX="center"
      alignY="center"
      className={classNames(className, classes.badge)}
    >
      {children}
    </StackLayout>
  );
};

export default Badge;
