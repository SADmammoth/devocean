import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Header.styles";
import NotificationsBadge from "../../specific/NotificationsBadge/NotificationsBadge";
import LanguageSwitcher from "../../specific/LanguageSwitcher/LanguageSwitcher";
import StackLayout from "../layouts/StackLayout";

const useStyles = createUseStyles(styles);

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <header className={classes.header}>
      <ContainerLayout>
        <StackLayout>
          <p>Header</p>
          <NotificationsBadge />
          <LanguageSwitcher />
        </StackLayout>
      </ContainerLayout>
    </header>
  );
};

export default Header;
