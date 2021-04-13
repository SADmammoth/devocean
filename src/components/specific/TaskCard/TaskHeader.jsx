import React from "react";
import Text from "../../generic/Text";

export default function TaskHeader({ classes, title }) {
  return (
    <header className={classes.header}>
      <Text type="common" bold className={classes.title} lines={2} hyphenated>
        {title}
      </Text>
    </header>
  );
}
