import React from "react";
import Text from "../../components/generic/Text";

export default function AppName({ locale, classes }) {
  return (
    <>
      <br />
      <Text type="h1" bold className={classes.appname}>
        {locale("appname")}
      </Text>
    </>
  );
}
