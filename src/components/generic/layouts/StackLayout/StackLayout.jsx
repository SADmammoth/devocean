import React from "react";

import orientationPrefix from "./orientationPrefix";

import { aligns, orientations } from "./maps";

import PropTypes from "prop-types";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./StackLayout.styles";

const useStyles = createUseStyles(styles);

const StackLayout = ({
  className,
  children,
  orientation,
  alignX,
  alignY,
  gap,
  style,

  as,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const orientationClass = orientations[orientation];
  const alignYClass = orientationPrefix(orientationClass, aligns[alignY], "Y");
  const alignXClass = orientationPrefix(orientationClass, aligns[alignX], "X");

  const RenderTag = as;

  return (
    <RenderTag
      className={classNames([
        className,
        classes.stack,
        classes[orientationClass],
        classes[alignYClass],
        classes[alignXClass],
      ])}
      style={{ ...style, "--gap": gap }}
    >
      {children}
    </RenderTag>
  );
};

StackLayout.propTypes = {
  orientation: PropTypes.oneOf(Object.keys(orientations)),
  alignY: PropTypes.oneOf(Object.keys(aligns)),
  alignX: PropTypes.oneOf(Object.keys(aligns)),
  gap: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  as: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

StackLayout.defaultProps = {
  orientation: "horizontal",
  alignY: "stretch",
  alignX: "stretch",

  as: "div",
};

export default StackLayout;
