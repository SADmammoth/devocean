import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./TeamViewContent.styles";

const useStyles = createUseStyles(styles);

const TeamViewContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div></div>;
};

export default TeamViewContent;
