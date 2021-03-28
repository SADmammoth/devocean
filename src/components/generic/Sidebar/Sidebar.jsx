import React from "react";
import classNames from "classnames";
import StackLayout from "../layouts/StackLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Sidebar.styles";
import Text from "../Text";
import StretchLastLayout from "../layouts/StretchLastLayout/StretchLastLayout";

const useStyles = createUseStyles(styles);

const Sidebar = ({ children, className, style, title }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  if (!title) {
    return (
      <aside className={classNames(classes.sidebar, className)} style={style}>
        <StackLayout orientation="vertical" alignX="center">
          {children}
        </StackLayout>
      </aside>
    );
  } else {
    return (
      <StretchLastLayout
        orientation="vertical"
        as="aside"
        className={classNames(className, classes.root)}
        style={style}
      >
        <Text type="big" className={classes.title}>
          {title}
        </Text>
        <StackLayout
          className={classNames(classes.sidebar)}
          orientation="vertical"
          alignX="center"
        >
          {children}
        </StackLayout>
      </StretchLastLayout>
    );
  }
};

export default Sidebar;
