import React from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./DiscussionsPageContent.styles";

const useStyles = createUseStyles(styles);

function DiscussionsPageContent({ id }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div>Oof2</div>;
}

DiscussionsPageContent.propTypes = {};

export default DiscussionsPageContent;
