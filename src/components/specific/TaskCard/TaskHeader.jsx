import React from "react";
import Text from "../../generic/Text";

export default function TaskHeader({ classes, title }) {
  return (
    <header className={classes.header}>
      <Text type="small" bold className={classes.title} lines={2} hyphenated>
        {title}
      </Text>
    </header>
  );
}
