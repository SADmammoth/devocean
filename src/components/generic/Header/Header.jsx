import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Header.styles";
import NotificationsBadge from "../../specific/NotificationsBadge";
import LanguageSwitcher from "../../specific/LanguageSwitcher";
import StackLayout from "../layouts/StackLayout";
import AppLogo from "../../specific/AppLogo";
import AppName from "../../specific/AppName";
import StretchLastLayout from "../layouts/StretchLastLayout";

const useStyles = createUseStyles(styles);

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <header className={classes.header}>
      <ContainerLayout>
        <StretchLastLayout
          gap="10px"
          className={classes.stack}
          reverse
          alignY="center"
        >
          <StackLayout className={classes.branding} alignY="center">
            <AppLogo />
            <AppName />
          </StackLayout>
          <NotificationsBadge />
          <LanguageSwitcher />
        </StretchLastLayout>
      </ContainerLayout>
    </header>
  );
};

export default Header;
