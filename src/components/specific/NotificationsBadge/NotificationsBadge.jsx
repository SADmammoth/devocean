import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import Badge from "../../generic/Badge";
import styles from "./NotificationsBadge.styles";

const useStyles = createUseStyles(styles);

const NotificationsBadge = ({ notificationsCount }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Badge className={classes.notificationsBadge}>{notificationsCount}</Badge>
  );
};

export default NotificationsBadge;
