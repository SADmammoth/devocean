import React, { useCallback, useEffect, useRef, useState } from "react";
import Text from "../Text";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./FormLabel.styles";
import classNames from "classnames";

const useStyles = createUseStyles(styles);

function FormLabel({ className, ...props }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const label = useRef(null);

  const [width, setWidth] = useState("100px");

  useEffect(() => {
    if (!label.current) return;
    const { width } = label.current.getBoundingClientRect();

    setWidth(parseInt(width) + 10 + "px");
  }, [label.current]);

  return (
    <div className={classes.inputContainer}>
      <Text
        ref={label}
        className={classNames(className, classes.label)}
        as="label"
        type="small"
        {...props}
      />
      <div className={classes.border} style={{ "--width": width }}></div>
    </div>
  );
}

FormLabel.propTypes = {};

export default FormLabel;
