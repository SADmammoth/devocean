import React from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./HistoryPageContent.styles";

const useStyles = createUseStyles(styles);

function HistoryPageContent(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div></div>;
}

HistoryPageContent.propTypes = {};

export default HistoryPageContent;
