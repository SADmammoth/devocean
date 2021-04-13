import React from "react";
import Text from "../../components/generic/Text";

export default function AppName({ locale, classes }) {
  return (
    <>
      <br />
      <Text type="common" bold className={classes.appname}>
        {locale("appname")}
      </Text>
    </>
  );
}
