import classNames from "classnames";
import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { Link } from "umi";
import styles from "./HiddenLink.styles";

const useStyles = createUseStyles(styles);

const HiddenLink = ({ children, className, ...props }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Link className={classNames(className, classes.link)} {...props}>
      {children}
    </Link>
  );
};

export default HiddenLink;
