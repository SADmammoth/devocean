import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./StretchLastLayout.styles";
import StackLayout from "../StackLayout";

const useStyles = createUseStyles(styles);

function StretchLastLayout({
  className,
  children,
  orientation,
  reverse,
  ...props
}) {
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
}

StretchLastLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  orientation: PropTypes.oneOfType(["vertical", "horizontal"]),
  reverse: PropTypes.bool,
};

StretchLastLayout.defaultProps = {
  reverse: false,
};

export default StretchLastLayout;
