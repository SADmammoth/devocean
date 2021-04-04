import React, { useEffect, useState } from "react";
import StackLayout from "../layouts/StackLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./CircleProgressBar.styles";

const useStyles = createUseStyles(styles);

const CircleProgressBar = ({
  progress,
  children,
  background,
  foreground,
  backdrop,
  size,
  width,
}) => {
  const theme = useTheme();
  const classes = useStyles({
    ...theme,
    size: size || "50px",
    width: width || "10px",
    progress: progress * 100,
    progressbarBackdrop: backdrop || theme.background.dark,
    progressbarBackground: background || theme.background.common,
    progressbarForeground: foreground || theme.text.highlighted,
  });

  return (
    <StackLayout
      className={classes.progressbar}
      alignX="center"
      alignY="center"
    >
      <div className={classes.content}>{children}</div>
    </StackLayout>
  );
};

export default CircleProgressBar;
