import React from 'react';

import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable } from 'recoil';

import StateMonade from '../../../helpers/components/StateMonade';
import formatName from '../../../helpers/functions/formatName';
import {
  userDataState,
  userState_getData,
} from '../../../recoil/states/userState';
import Button from '../../generic/Button';
import ContainerLayout from '../../generic/layouts/ContainerLayout';
import StackLayout from '../../generic/layouts/StackLayout';
import StretchLastLayout from '../../generic/layouts/StretchLastLayout';
import AppLogo from '../AppLogo';
import AppName from '../AppName';
import LanguageSwitcher from '../LanguageSwitcher';
import NotificationsBadge from '../NotificationsBadge';
import TeammateTitle from '../TeammateTitle';

import styles from './Header.styles';

const useStyles = createUseStyles(styles);

const Header = ({ hideNotificationBadge }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const userData = useRecoilValueLoadable(userDataState);

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
          <StateMonade state={userData.state}>
            {userData.contents ? (
              <TeammateTitle
                image={userData.contents.avatar}
                displayName={formatName(userData.contents)}
              />
            ) : (
              <Button link="/auth">Login</Button>
            )}
          </StateMonade>
        </StretchLastLayout>
      </ContainerLayout>
    </header>
  );
};

export default Header;
