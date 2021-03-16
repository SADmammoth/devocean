import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import priorities from "./priorities";
import styles from "./PriorityBadge.styles";

const useStyles = createUseStyles(styles);

const PriorityBadge = ({ priority }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes[priorities[priority]]}>{priorities[priority]}</div>
  );
};

export default PriorityBadge;
