import React from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./MessageBox.styles";
import IncomingMessage from "./IncomingMessage";
import OngoingMessage from "./OngoingMessage";
import classNames from "classnames";

const useStyles = createUseStyles(styles);

function MessageBox({ author, text }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  if (author) {
    return (
      <IncomingMessage
        className={classNames(classes.message, classes.incoming)}
        author={author}
      >
        {text}
      </IncomingMessage>
    );
  } else {
    return (
      <OngoingMessage className={classNames(classes.message, classes.ongoing)}>
        {text}
      </OngoingMessage>
    );
  }
}

MessageBox.propTypes = {};

export default MessageBox;
