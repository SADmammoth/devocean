import React from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import classNames from "classnames";
import styles from "./StretchLayout.styles";

const useStyles = createUseStyles(styles);

function StretchLayout({ className, children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classNames(className, classes.container)}>{children}</div>
  );
}

StretchLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default StretchLayout;
