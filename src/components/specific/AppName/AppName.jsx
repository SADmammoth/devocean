import React from "react";
import useLocale from "../../../helpers/useLocale";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./AppName.styles";
import Text from "../../generic/Text";
import { Link } from "umi";

const useStyles = createUseStyles(styles);

const AppName = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  return (
    <Text type="h1" bold className={classes.appname}>
      <Link to="/">{locale("appname")}</Link>
    </Text>
  );
};

export default AppName;
