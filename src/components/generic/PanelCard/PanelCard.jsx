import React from "react";
import classNames from "classnames";
import StackLayout from "../../generic/layouts/StackLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./PanelCard.styles";

const useStyles = createUseStyles(styles);

const PanelCard = ({ className, children, ...props }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <StackLayout
      {...props}
      className={classNames(classes.panelCard, className)}
    >
      {children}
    </StackLayout>
  );
};

export default PanelCard;
