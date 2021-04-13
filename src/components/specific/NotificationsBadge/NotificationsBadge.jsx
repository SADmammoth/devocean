import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { useRecoilValueLoadable } from "recoil";
import StateMonade from "../../../helpers/StateMonade";
import { notificationsState_count } from "../../../recoil/states/notificationsState";
import Badge from "../../generic/Badge";
import styles from "./NotificationsBadge.styles";
import Text from "../../generic/Text";

const useStyles = createUseStyles(styles);

const NotificationsBadge = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const notificationsCountLoadable = useRecoilValueLoadable(
    notificationsState_count
  );

  return (
    <StateMonade state={notificationsCountLoadable.state}>
      <Badge className={classes.notificationsBadge}>
        <Text type="common">{notificationsCountLoadable.contents}</Text>
      </Badge>
    </StateMonade>
  );
};

export default NotificationsBadge;
