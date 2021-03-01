import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Header.styles";
import NotificationsBadge from "../../specific/NotificationsBadge/NotificationsBadge";

const useStyles = createUseStyles(styles);

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <header className={classes.header}>
      <ContainerLayout>Header</ContainerLayout>
      <NotificationsBadge />
    </header>
  );
};

export default Header;
