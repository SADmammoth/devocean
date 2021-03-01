import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { Button } from "reakit";
import Client from "../../../helpers/Client";
import styles from "./AddNotification.styles";

const useStyles = createUseStyles(styles);

const AddNotification = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const addNotification = (notification) => {
    const request = async () => {
      await Client.postNotifications(notification);
    };

    request();
  };

  return (
    <>
      <Button onClick={() => addNotification({ empty: true })}>
        Add notification
      </Button>
    </>
  );
};

export default AddNotification;
