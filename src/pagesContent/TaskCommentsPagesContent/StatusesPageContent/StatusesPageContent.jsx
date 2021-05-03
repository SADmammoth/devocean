import React from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./StatusesPageContent.styles";

const useStyles = createUseStyles(styles);

function StatusesPageContent(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div></div>;
}

StatusesPageContent.propTypes = {};

export default StatusesPageContent;
