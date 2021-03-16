import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import orientations from "./orientations";
import styles from "./ProgressBar.styles";

const useStyles = createUseStyles(styles);

const ProgressBar = ({ progress, orientation }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div
      className={(classes.progressbar, classes[orientations[orientation]])}
      style={{ "--progress": progress }}
    />
  );
};

export default ProgressBar;
