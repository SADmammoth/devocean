import React from "react";

import BlockDescriptionLayout from "../../generic/layouts/BlockDescriptionLayout";

import Text from "../../generic/Text";
import PropTypes from "prop-types";
import InteractiveCard from "../../generic/InteractiveCard";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./NotificationContent.styles";

const useStyles = createUseStyles(styles);

function NotificationContent({ title, time, author }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <BlockDescriptionLayout>
      <BlockDescriptionLayout.Block alignY="start">
        <Text
          className={classes.time}
          type="hint"
          as="time"
          dateTime={time.value.toString()}
        >
          {time.toString()}
        </Text>
      </BlockDescriptionLayout.Block>
      <BlockDescriptionLayout.Description>
        <Text type="small">[{author}]:</Text>
        <Text type="common" bold>
          {title}
        </Text>
      </BlockDescriptionLayout.Description>
    </BlockDescriptionLayout>
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
