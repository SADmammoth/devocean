import React from "react";

import orientationPrefix from "./orientationPrefix";

import { aligns, orientations } from "./maps";

import PropTypes from "prop-types";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./StackLayout.styles";

const useStyles = createUseStyles(styles);

const StackLayout = ({ className, children, orientation, alignX, alignY }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const orientationClass = orientations[orientation];
  const alignYClass = orientationPrefix(orientationClass, aligns[alignY], "Y");
  const alignXClass = orientationPrefix(orientationClass, aligns[alignX], "X");

  return (
    <div
      className={classNames([
        className,
        classes.stack,
        classes[orientationClass],
        classes[alignYClass],
        classes[alignXClass],
      ])}
    >
      {children}
    </div>
  );
};

StackLayout.propTypes = {
  orientation: PropTypes.oneOf(Object.keys(orientations)),
  alignY: PropTypes.oneOf(Object.keys(aligns)),
  alignX: PropTypes.oneOf(Object.keys(aligns)),
};

StackLayout.defaultProps = {
  orientation: "horizontal",
  alignY: "stretch",
  alignX: "stretch",
};

export default StackLayout;
