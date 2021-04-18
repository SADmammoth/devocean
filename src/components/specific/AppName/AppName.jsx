import React from "react";
import useLocale from "../../../helpers/useLocale";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./AppName.styles";
import Text from "../../generic/Text";
import HiddenLink from "../../generic/HiddenLink";

const useStyles = createUseStyles(styles);

const AppName = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const Link = (props) => <HiddenLink to="/" {...props} />;

  return (
    <Text type="h1" as={Link} bold className={classes.appname}>
      {locale("appname")}
    </Text>
  );
};

export default AppName;
