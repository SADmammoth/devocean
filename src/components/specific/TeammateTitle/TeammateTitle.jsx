import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import Avatar from "../../generic/Avatar";
import StackLayout from "../../generic/layouts/StackLayout";
import Text from "../../generic/Text";
import styles from "./TeammateTitle.styles";

const useStyles = createUseStyles(styles);

const TeammateTitle = ({ image, displayName }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <StackLayout orientation="horizontal" alignY="center" gap="10px">
      <Avatar
        size="30px"
        displayName={displayName}
        image={image}
        labelledby={displayName}
      />
      <Text id={displayName} type="big" ellipsis>
        {displayName}
      </Text>
    </StackLayout>
  );
};

export default TeammateTitle;
