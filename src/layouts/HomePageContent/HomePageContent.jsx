import React from "react";

import Marked from "../../components/generic/Marked";

import NotificationsList from "../../components/specific/NotificationsList";
import StackLayout from "../../components/generic/layouts/StackLayout";
import Sidebar from "../../components/generic/Sidebar";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./HomePageContent.styles";
import useLocale from "../../helpers/useLocale";
import Text from "../../components/generic/Text";
import Clock from "../../components/generic/Clock";
import GridLayout from "../../components/generic/layouts/GridLayout";
import AppName from "./AppName";
import Skip from "../../components/generic/layouts/GridLayout/Skip";
import StretchLayout from "../../components/generic/layouts/StretchLayout";
import NavList from "../../components/generic/NavList";
import { useRecoilValue } from "recoil";
import navitemsState from "../../recoil/states/navitemsState";
import ClockSidebar from "../../components/specific/ClockSidebar/ClockSidebar";

const useStyles = createUseStyles(styles);

const HomePageContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const navitems = useRecoilValue(navitemsState);

  return (
    <>
      <GridLayout className={classes.content} stretchLast>
        <ClockSidebar column={3} className={classes.sidebar} />
        <Skip column={1} />
        <StackLayout
          column={3}
          orientation="vertical"
          className={classes.topPadding}
        >
          <Text type="h1" alignment="left">
            {locale("Welcome back", {
              appname: <AppName locale={locale} classes={classes} />,
            })}
          </Text>
          <Text type="sub" italic>
            {locale("Welcome back subtitle")}
          </Text>
          <NavList items={navitems} />
        </StackLayout>
        <StackLayout
          orientation="vertical"
          alignX="start"
          className={classes.topPadding}
        >
          {Marked(<Text type="h2">{locale("Notifications")}</Text>)}
          <StretchLayout>
            <NotificationsList showCount={3} />
          </StretchLayout>
        </StackLayout>
      </GridLayout>
    </>
  );
};

export default HomePageContent;
