import React from "react";
import { MarkdownOutput as ReactFormMarkdown } from "@bit/sadmammoth.components.react-form";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./MarkdownOutput.styles";
import { identity } from "lodash";

const useStyles = createUseStyles(styles);

const MarkdownOutput = ({ name, children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <ReactFormMarkdown
      id={name}
      name={name}
      value={children}
      markdownFeatures={{
        headings: true,
        bold: true,
        italic: true,
        links: true,
      }}
    />
  );
};

MarkdownOutput.propTypes = {
  children: PropTypes.string.isRequired,
};

export default MarkdownOutput;
