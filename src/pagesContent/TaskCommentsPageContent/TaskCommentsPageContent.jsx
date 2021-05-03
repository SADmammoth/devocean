import React from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./TaskCommentsPageContent.styles";

const useStyles = createUseStyles(styles);

function TaskCommentsPageContent({ id, children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div>Oof{children}</div>;
}

TaskCommentsPageContent.propTypes = {};

export default TaskCommentsPageContent;
