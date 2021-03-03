import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { Button } from "reakit";
import { useNotificationsState_add } from "../../../recoil/atoms/notificationsState";
import styles from "./AddNotification.styles";

const useStyles = createUseStyles(styles);

const AddNotification = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const addNotification = useNotificationsState_add();

  return (
    <>
      <Button
        onClick={() =>
          addNotification({
            time: "4h ago",
            title: "Notification",
            author: "Doe",
          })
        }
      >
        Add notification
      </Button>
    </>
  );
};

export default AddNotification;
