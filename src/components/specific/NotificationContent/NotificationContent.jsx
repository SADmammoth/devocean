import React from "react";

import BlockDescriptionLayout from "../../generic/layouts/BlockDescriptionLayout";

import Text from "../../generic/Text";
import PropTypes from "prop-types";
import InteractiveCard from "../../generic/InteractiveCard";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./NotificationContent.styles";
import RelativeDate from "../../../helpers/RelativeDate";
import formatName from "../../../helpers/formatName";

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
          dateTime={new RelativeDate(time).value.toString()}
        >
          {new RelativeDate(time).toString()}
        </Text>
      </BlockDescriptionLayout.Block>
      <BlockDescriptionLayout.Description>
        <Text type="small">[{formatName(author)}]:</Text>
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
