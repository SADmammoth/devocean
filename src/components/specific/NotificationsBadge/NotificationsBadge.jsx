import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { useRecoilValue } from "recoil";
import { notificationsState_count } from "../../../recoil/atoms/notificationsState";
import Badge from "../../generic/Badge";
import styles from "./NotificationsBadge.styles";

const useStyles = createUseStyles(styles);

const NotificationsBadge = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const notificationsCount = useRecoilValue(notificationsState_count);

  return (
    <Badge className={classes.notificationsBadge}>{notificationsCount}</Badge>
  );
};

export default NotificationsBadge;
