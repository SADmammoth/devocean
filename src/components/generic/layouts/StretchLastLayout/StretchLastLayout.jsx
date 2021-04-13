import React from "react";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./StretchLastLayout.styles";
import StackLayout from "../StackLayout";

const useStyles = createUseStyles(styles);

const StretchLastLayout = ({
  className,
  children,
  orientation,
  reverse,
  ...props
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const alignment =
    orientation === "vertical"
      ? { alignY: reverse ? "end" : "start" }
      : { alignX: reverse ? "end" : "start" };

  return (
    <StackLayout
      className={classNames(
        classes.stretchLast,
        className,
        classes[orientation],
        {
          [classes.reversed]: !!reverse,
          [classes.normal]: !reverse,
        }
      )}
      orientation={orientation}
      {...props}
      {...alignment}
    >
      {children}
    </StackLayout>
  );
};

export default StretchLastLayout;
