import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./EventsViewContent.styles";

const useStyles = createUseStyles(styles);

const EventsViewContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div></div>;
};

export default EventsViewContent;
