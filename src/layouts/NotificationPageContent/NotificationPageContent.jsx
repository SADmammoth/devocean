import React from "react";
import Text from "../../components/generic/Text";
import StackLayout from "../../components/generic/layouts/StackLayout";
import Skip from "../../components/generic/layouts/GridLayout/Skip";
import Sidebar from "../../components/generic/Sidebar";
import GridLayout from "../../components/generic/layouts/GridLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./NotificationPageContent.styles";
import ClockSidebar from "../../components/specific/ClockSidebar/ClockSidebar";

const useStyles = createUseStyles(styles);

const NotificationPageContent = ({ id, title, time, author }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <GridLayout className={classes.content} stretchLast>
      <ClockSidebar column={3} className={classes.sidebar} />
      <Skip column={1} />
      <StackLayout
        column={3}
        orientation="vertical"
        className={classes.topPadding}
      >
        <Text type="h1" alignment="left">
          {title}
        </Text>
        <Text type="sub" italic>
          {`${time} by ${author}`}
        </Text>
      </StackLayout>
    </GridLayout>
  );
};

export default NotificationPageContent;
