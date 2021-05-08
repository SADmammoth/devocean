import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Input as ReakitInput } from "reakit";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Input.styles";
import customTypes from "./customTypes";

const useStyles = createUseStyles(styles);

function Input({ type, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const CustomInput = customTypes[type];
  if (CustomInput) {
    return <CustomInput type={type} {...props} />;
  }

  const as = type === "textarea" ? "textarea" : "input";
  console.log(props);
  return (
    <ReakitInput
      {...props}
      className={classNames(classes.formControl, classes[as], props.className)}
      as={as}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
};

export default Input;
