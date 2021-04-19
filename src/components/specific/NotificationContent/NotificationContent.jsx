import React from "react";
import PropTypes from "prop-types";
import InteractiveCard from "../../generic/InteractiveCard";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./NotificationContent.styles";

const useStyles = createUseStyles(styles);

function NotificationContent({ title, time, author }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <>
      <time dateTime={time.value.toString()}>{time.toString()}</time>
      <p>{title}</p>
      <p>by {author}</p>
    </>
  );
}

NotificationContent.propTypes = {
  title: PropTypes.string,
  time: PropTypes.shape({
    toString: PropTypes.func,
  }),
  author: PropTypes.string,
};

export default NotificationContent;
