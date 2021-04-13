import React from "react";
import logo from "../../../assets/images/logo.png";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./AppLogo.styles";

const useStyles = createUseStyles(styles);

export default function AppLogo() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <img
      className={classes.appLogo}
      src={logo}
      alt="DEVocean"
      title="DEVocean"
    />
  );
}
