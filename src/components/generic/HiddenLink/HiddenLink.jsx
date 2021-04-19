import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import { Link } from "umi";
import styles from "./HiddenLink.styles";

const useStyles = createUseStyles(styles);

function HiddenLink({ children, className, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Link className={classNames(className, classes.link)} {...props}>
      {children}
    </Link>
  );
}

HiddenLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default HiddenLink;
