import React from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ReportsPageContent.styles";

const useStyles = createUseStyles(styles);

function ReportsPageContent(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div></div>;
}

ReportsPageContent.propTypes = {};

export default ReportsPageContent;
