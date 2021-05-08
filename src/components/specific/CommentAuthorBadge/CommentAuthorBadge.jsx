import React from "react";

import LiveRelativeDate from "../../generic/LiveRelativeDate";

import Avatar from "../../generic/Avatar";

import BlockDescriptionLayout from "../../generic/layouts/BlockDescriptionLayout";

import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./CommentAuthorBadge.styles";
import formatName from "../../../helpers/formatName";
import Text from "../../generic/Text";

const useStyles = createUseStyles(styles);

function CommentAuthorBadge({ image, author, time }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <BlockDescriptionLayout>
      <BlockDescriptionLayout.Block>
        <Avatar image={image} displayName={formatName(author || {})} />
      </BlockDescriptionLayout.Block>
      <BlockDescriptionLayout.Description>
        <Text type="small" bold>
          {formatName(author || {})}
        </Text>
        <LiveRelativeDate type="small" date={time} />
      </BlockDescriptionLayout.Description>
    </BlockDescriptionLayout>
  );
}

CommentAuthorBadge.propTypes = {};

export default CommentAuthorBadge;
