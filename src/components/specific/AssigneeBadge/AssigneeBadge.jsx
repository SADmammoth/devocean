import React from "react";

import LiveRelativeDate from "../../generic/LiveRelativeDate";

import PropTypes from "prop-types";
import Text from "../../generic/Text";
import Avatar from "../../generic/Avatar";
import { useTheme, createUseStyles } from "react-jss";
import BlockDescriptionLayout from "../../generic/layouts/BlockDescriptionLayout";
import styles from "./AssigneeBadge.styles";
import RelativeDate from "../../../helpers/RelativeDate";

const useStyles = createUseStyles(styles);

function AssigneeBadge({ displayName, assignedDate }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <BlockDescriptionLayout>
      <BlockDescriptionLayout.Block>
        <Avatar displayName={displayName} size={"50px"} />
      </BlockDescriptionLayout.Block>
      <BlockDescriptionLayout.Description>
        <Text type="common" bold ellipsis>
          {displayName}
        </Text>
        <LiveRelativeDate type="small" date={assignedDate} />
      </BlockDescriptionLayout.Description>
    </BlockDescriptionLayout>
  );
}

AssigneeBadge.propTypes = {
  displayName: PropTypes.string.isRequired,
  assignedDate: PropTypes.shape({
    toString: PropTypes.func,
  }),
};

export default AssigneeBadge;
