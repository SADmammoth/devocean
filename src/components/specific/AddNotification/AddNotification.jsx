import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { Button } from "reakit";
import styles from "./AddNotification.styles";
import fakeNotification from "./fakeNotification";

const useStyles = createUseStyles(styles);

const AddNotification = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const addNotification = () => {};

  return (
    <>
      <Button onClick={() => addNotification(fakeNotification)}>
        Add notification
      </Button>
    </>
  );
};

export default AddNotification;
