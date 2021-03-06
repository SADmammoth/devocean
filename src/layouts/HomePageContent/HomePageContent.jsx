import React from "react";
import NotificationsList from "../../components/specific/NotificationsList";
import StackLayout from "../../components/generic/layouts/StackLayout";
import Sidebar from "../../components/generic/Sidebar";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./HomePageContent.styles";
import useLocale from "../../helpers/useLocale";
import Text from "../../components/generic/Text";

const useStyles = createUseStyles(styles);

const HomePageContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  return (
    <>
      <StackLayout>
        <Sidebar />
        <StackLayout className={classes.content} orientation="vertical">
          <Text type="h1" alignment="center" className="title">
            {locale("Index page")}
          </Text>
          <NotificationsList />
        </StackLayout>
      </StackLayout>
    </>
  );
};

export default HomePageContent;
