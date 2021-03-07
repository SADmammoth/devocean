import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import classNames from "classnames";
import styles from "./ContainerLayout.styles";

const useStyles = createUseStyles(styles);

const ContainerLayout = ({ children, className }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classNames(classes.containerLayout, className)}>
      {children}
    </div>
  );
};

export default ContainerLayout;
