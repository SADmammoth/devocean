import React from "react";
import sizes from "./sizes";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Button as ReakitButton } from "reakit";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Button.styles";

const useStyles = createUseStyles(styles);

const Button = ({ className, type, onClick, children, size, label, props }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ReakitButton
      type={type}
      className={classNames(className, classes.button, classes[sizes[size]])}
      onClick={onClick}
      aria-label={label}
      {...props}
    >
      {children}
    </ReakitButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(sizes)),
};

Button.defaultProps = {
  size: "common",
};

export default Button;
