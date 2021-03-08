import React from "react";
import classNames from "classnames";
import Clock from "../../generic/Clock";
import Sidebar from "../../generic/Sidebar";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ClockSidebar.styles";
import StackLayout from "../../generic/layouts/StackLayout";

const useStyles = createUseStyles(styles);

const ClockSidebar = ({ className, ...props }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Sidebar className={classNames(className, classes.clockSidebar)} {...props}>
      <StackLayout
        className={classes.content}
        orientation="vertical"
        alignX="center"
        gap="2rem"
      >
        <Clock city="Belarus, Minsk" size="big" />
        <StackLayout className={classes.secondaryClocks} alignX="center">
          <Clock city="Country, City" size="small" />
        </StackLayout>
      </StackLayout>
    </Sidebar>
  );
};

export default ClockSidebar;
