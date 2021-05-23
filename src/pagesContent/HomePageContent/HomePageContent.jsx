import React from 'react';

import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';

import Marked from '../../components/generic/Marked';
import NavList from '../../components/generic/NavList';
import Text from '../../components/generic/Text';
import GridLayout from '../../components/generic/layouts/GridLayout';
import Skip from '../../components/generic/layouts/GridLayout/Skip';
import StackLayout from '../../components/generic/layouts/StackLayout';
import StretchLayout from '../../components/generic/layouts/StretchLayout';
import AppName from '../../components/specific/AppName';
import ClockSidebar from '../../components/specific/ClockSidebar';
import NotificationsList from '../../components/specific/NotificationsList';
import FeatureMonade from '../../helpers/components/FeatureMonade';
import StateMonade from '../../helpers/components/StateMonade';
import useLocale from '../../helpers/hooks/useLocale';
import navitemsState, {
  navitemsState_get,
} from '../../recoil/states/navitemsState';

import styles from './HomePageContent.styles';

const useStyles = createUseStyles(styles);

const HomePageContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const navitems = useRecoilValueLoadable(navitemsState_get);

  return (
    <>
      <GridLayout className={classes.content} stretchLast>
        <ClockSidebar column={3} className={classes.sidebar} />
        <Skip column={1} />
        <StackLayout
          column={3}
          orientation="vertical"
          className={classes.topPadding}>
          <Text className={classes.appname} type="h1" alignment="left">
            {locale('Welcome back', {
              appname: <AppName locale={locale} classes={classes} />,
            })}
          </Text>
          <Text type="sub" italic>
            {locale('Welcome back subtitle')}
          </Text>
          <StateMonade state={navitems.state}>
            <NavList items={navitems.contents} />
          </StateMonade>
        </StackLayout>
        <StackLayout
          orientation="vertical"
          alignX="start"
          className={classes.topPadding}>
          <FeatureMonade feature="viewNotifications">
            {Marked(<Text type="h2">{locale('Notifications')}</Text>)}
            <NotificationsList showCount={3} />
          </FeatureMonade>
        </StackLayout>
      </GridLayout>
    </>
  );
};

export default HomePageContent;
