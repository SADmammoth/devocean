import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { useSetRecoilState } from "recoil";
import notificationsState from "../../../recoil/states/notificationsState";
import styles from "./AddNotification.styles";
import Button from "../../generic/Button";

const useStyles = createUseStyles(styles);

const AddNotification = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const addNotification = useSetRecoilState(notificationsState);

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
