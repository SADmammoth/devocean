import React from "react";
import Text from "../../generic/Text";
import Avatar from "../../generic/Avatar";
import { useTheme, createUseStyles } from "react-jss";
import BlockDescriptionLayout from "../../generic/layouts/BlockDescriptionLayout/BlockDescriptionLayout";
import styles from "./AssigneeBadge.styles";

const useStyles = createUseStyles(styles);

const AssigneeBadge = ({ displayName, dateAssigned }) => {
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
        <Text type="small">{dateAssigned}</Text>
      </BlockDescriptionLayout.Description>
    </BlockDescriptionLayout>
  );
};

export default AssigneeBadge;