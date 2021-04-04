import React, { useEffect } from "react";
import alignments from "./alignments";
import classNames from "classnames";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Text.styles";
import types from "./types";
import useHyphenate from "../../../helpers/useHyphenate";
import useLocale from "../../../helpers/useLocale";

const useStyles = createUseStyles(styles);

const Text = ({
  type,
  children,
  className,
  bold,
  italic,
  alignment,
  ellipsis,
  lines,
  hyphenated,

  ...props
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const TextTag = types[type];

  const locale = useLocale();
  const hyphenate = useHyphenate(locale("vowels"), locale("consonants"));
  let text;
  useEffect(() => {
    if (typeof children === "string" && hyphenated) {
      text = hyphenate(children);
    }
  }, [hyphenated, children]);

  return (
    <TextTag
      className={classNames(
        classes.text,
        classes[type],
        className,
        classes[alignments[alignment] + "-alignment"],
        {
          [classes.bold]: bold,
          [classes.italic]: italic,
          [classes.ellipsis]: ellipsis || !!lines,
          [classes.hyphenated]: hyphenated,
        }
      )}
      style={{ "--lines": lines }}
      {...props}
    >
      {text || children}
    </TextTag>
  );
};

export default Text;
