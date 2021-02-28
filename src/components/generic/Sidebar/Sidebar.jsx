import React from "react";
import StackLayout from "../layouts/StackLayout";
import { FaCog } from "react-icons/fa";
import { Button } from "reakit";
import { useTheme, createUseStyles } from "react-jss";
import Clock from "../Clock";
import styles from "./Sidebar.styles";

const useStyles = createUseStyles(styles);

const Sidebar = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <aside className={classes.sidebar}>
      <StackLayout orientation="vertical" alignX="center">
        <Clock city="Belarus, Minsk" />
        <Button>
          <FaCog /> Change settings
        </Button>
      </StackLayout>
    </aside>
  );
};

export default Sidebar;
