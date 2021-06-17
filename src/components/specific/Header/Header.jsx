import React from 'react';

import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable, useSetRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';

import StateMonade from '../../../helpers/components/StateMonade';
import formatName from '../../../helpers/functions/formatName';
import navitemsState, {
  navitemsState_getShort,
} from '../../../recoil/states/navitemsState';
import userState, {
  userDataState,
  userState_logout,
} from '../../../recoil/states/userState';
import Button from '../../generic/Button';
import NavItems from '../../generic/NavItems/NavItems';
import ContainerLayout from '../../generic/layouts/ContainerLayout';
import GridLayout from '../../generic/layouts/GridLayout';
import StackLayout from '../../generic/layouts/StackLayout';
import StretchLastLayout from '../../generic/layouts/StretchLastLayout';
import AppLogo from '../AppLogo';
import AppName from '../AppName';
import LanguageSwitcher from '../LanguageSwitcher';
import NotificationsBadge from '../NotificationsBadge';
import TeammateTitle from '../TeammateTitle';

import styles from './Header.styles';

const useStyles = createUseStyles(styles);

const Header = ({ hideNotificationBadge, hideNavigation }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const userData = useRecoilValue(userDataState);
  const navItems = useRecoilValue(navitemsState_getShort);
  const setUser = useSetRecoilState(userState);

  return (
    <header className={classes.header}>
      <ContainerLayout>
        <GridLayout stretchLast>
          <StackLayout
            column={3}
            className={classes.branding}
            alignY="center"
            alignX="center">
            <AppLogo />
            {/* <AppName /> */}
          </StackLayout>

          <StackLayout alignX="end" alignY="center" gap="10px">
            {hideNavigation || (
              <NavItems
                as={StackLayout}
                className={classes.navigation}
                itemClass={classes.navButton}
                items={navItems}
              />
            )}
            {hideNotificationBadge || <NotificationsBadge />}
            <LanguageSwitcher />
            {userData ? (
              <>
                <TeammateTitle
                  id={userData.id}
                  image={userData.avatar}
                  displayName={formatName(userData)}
                />

                <Button
                  size="fluid"
                  onClick={async () => {
                    await userState_logout(userData.id);
                    setUser(null);
                  }}>
                  Logout
                </Button>
              </>
            ) : null}
          </StackLayout>
        </GridLayout>
      </ContainerLayout>
    </header>
  );
};

export default Header;
