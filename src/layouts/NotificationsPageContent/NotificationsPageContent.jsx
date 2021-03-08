import React from "react";
import classNames from "classnames";
import Text from "../../components/generic/Text";
import StackLayout from "../../components/generic/layouts/StackLayout";
import ClockSidebar from "../../components/specific/ClockSidebar";
import GridLayout from "../../components/generic/layouts/GridLayout";
import useLocale from "../../helpers/useLocale";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./NotificationsPageContent.styles";
import NotificationsList from "../../components/specific/NotificationsList";
import StretchLayout from "../../components/generic/layouts/StretchLayout";

const useStyles = createUseStyles(styles);

const NotificationsPageContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  return (
    <>
      <GridLayout className={classes.content} stretchLast>
        <ClockSidebar column={3} className={classes.sidebar} />
        <StackLayout
          orientation="vertical"
          className={classes.paddingTop}
          alignX="start"
          column={8}
        >
          <Text type="h1Small">{locale("Notifications")}</Text>
          <StretchLayout>
            <NotificationsList />
          </StretchLayout>
        </StackLayout>
      </GridLayout>
    </>
  );
};

export default NotificationsPageContent;
