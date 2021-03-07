import React from "react";
import NotificationsList from "../../components/specific/NotificationsList";
import StackLayout from "../../components/generic/layouts/StackLayout";
import Sidebar from "../../components/generic/Sidebar";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./HomePageContent.styles";
import useLocale from "../../helpers/useLocale";
import Text from "../../components/generic/Text";
import Clock from "../../components/generic/Clock";
import { orientations } from "../../components/generic/layouts/StackLayout/maps";
import GridLayout from "../../components/generic/layouts/GridLayout";
import AppName from "./AppName";
import Skip from "../../components/generic/layouts/GridLayout/Skip";

const useStyles = createUseStyles(styles);

const HomePageContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  return (
    <>
      <GridLayout className={classes.content} stretchLast>
        <Sidebar column={3} className={classes.sidebar}>
          <Clock city="Belarus, Minsk" />
        </Sidebar>
        <Skip column={1} />
        <StackLayout column={3} orientation={orientations.vertical}>
          <Text type="h1" alignme nt="left">
            {locale("Welcome back", {
              appname: <AppName locale={locale} classes={classes} />,
            })}
          </Text>
          <Text type="sub" italics>
            {locale("Welcome back subtitle")}
          </Text>
        </StackLayout>
        <StackLayout orientation={orientations.vertical}>
          <Text type="h2">{locale("Notifications")}</Text>
          <NotificationsList />
        </StackLayout>
      </GridLayout>
    </>
  );
};

export default HomePageContent;
