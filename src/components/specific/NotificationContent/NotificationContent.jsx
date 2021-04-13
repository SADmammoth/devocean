import React from "react";
import InteractiveCard from "../../generic/InteractiveCard";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./NotificationContent.styles";

const useStyles = createUseStyles(styles);

const NotificationContent = ({ title, time, author }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <time dateTime={time.value.toString()}>{time.toString()}</time>
      <p>{title}</p>
      <p>by {author}</p>
    </>
  );
};

export default NotificationContent;
