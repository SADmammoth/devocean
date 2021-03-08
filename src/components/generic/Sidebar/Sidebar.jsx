import React from "react";
import classNames from "classnames";
import StackLayout from "../layouts/StackLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Sidebar.styles";

const useStyles = createUseStyles(styles);

const Sidebar = ({ children, className, style }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <aside className={classNames(classes.sidebar, className)} style={style}>
      <StackLayout orientation="vertical" alignX="center">
        {children}
      </StackLayout>
    </aside>
  );
};

export default Sidebar;
