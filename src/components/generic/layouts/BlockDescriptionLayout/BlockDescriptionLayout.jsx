import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import StackLayout from "../StackLayout";
import styles from "./BlockDescriptionLayout.styles";

const useStyles = createUseStyles(styles);

const BlockDescriptionLayout = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <StackLayout
      orientation="horizontal"
      alignY="stretch"
      alignX="start"
      className={classes.layout}
      gap="5px"
    >
      {children}
    </StackLayout>
  );
};

const Block = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div className={classes.block}>{children}</div>;
};

const Description = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <StackLayout
      orientation="vertical"
      alignY="center"
      alignX="start"
      className={classes.description}
      gap="0"
    >
      {children}
    </StackLayout>
  );
};

BlockDescriptionLayout.Block = Block;
BlockDescriptionLayout.Description = Description;

export default BlockDescriptionLayout;
