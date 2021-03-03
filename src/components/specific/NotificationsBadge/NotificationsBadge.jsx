import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { useRecoilValueLoadable } from "recoil";
import { notificationsState_count } from "../../../recoil/atoms/notificationsState";
import Badge from "../../generic/Badge";
import styles from "./NotificationsBadge.styles";

const useStyles = createUseStyles(styles);

const NotificationsBadge = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const notificationsCountLoadable = useRecoilValueLoadable(
    notificationsState_count
  );

  return (
    <Badge className={classes.notificationsBadge}>
      {notificationsCountLoadable.state === "hasValue"
        ? notificationsCountLoadable.contents
        : "Loading..."}
    </Badge>
  );
};

export default NotificationsBadge;
