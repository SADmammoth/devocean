import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { Link } from "umi";
import styles from "./HiddenLink.styles";

const useStyles = createUseStyles(styles);

const HiddenLink = ({ children, ...props }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Link className={classes.link} {...props}>
      {children}
    </Link>
  );
};

export default HiddenLink;
