import React from 'react';

import { useTheme, createUseStyles } from 'react-jss';

import AppLogo from '../../specific/AppLogo';
import AppName from '../../specific/AppName';
import LanguageSwitcher from '../../specific/LanguageSwitcher';
import NotificationsBadge from '../../specific/NotificationsBadge';
import ContainerLayout from '../layouts/ContainerLayout';
import StackLayout from '../layouts/StackLayout';
import StretchLastLayout from '../layouts/StretchLastLayout';

import styles from './Header.styles';

const useStyles = createUseStyles(styles);

const Header = ({ hideNotificationBadge }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <header className={classes.header}>
      <ContainerLayout>
        <StretchLastLayout
          gap="10px"
          className={classes.stack}
          reverse
          alignY="center">
          <StackLayout className={classes.branding} alignY="center">
            <AppLogo />
            <AppName />
          </StackLayout>
          {hideNotificationBadge || <NotificationsBadge />}
          <LanguageSwitcher />
        </StretchLastLayout>
      </ContainerLayout>
    </header>
  );
};

export default Header;
