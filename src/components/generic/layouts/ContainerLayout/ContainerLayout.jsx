import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ContainerLayout.styles";

const useStyles = createUseStyles(styles);

const ContainerLayout = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div class={classes.containerLayout}>{children}</div>;
};

export default ContainerLayout;
