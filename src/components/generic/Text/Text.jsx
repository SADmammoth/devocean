import React from "react";
import alignments from "./alignments";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Text.styles";
import types from "./types";

const useStyles = createUseStyles(styles);

const Text = ({ type, children, className, bold, italic, alignment }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const TextTag = types[type];

  return (
    <TextTag
      className={classNames(
        classes[type],
        className,
        classes[alignments[alignment] + "-alignment"],
        {
          [classes.bold]: bold,
          [classes.italic]: italic,
        }
      )}
    >
      {children}
    </TextTag>
  );
};

export default Text;
