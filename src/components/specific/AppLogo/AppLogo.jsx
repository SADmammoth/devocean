import React from "react";
import logo from "../../../assets/images/logo.png";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./AppLogo.styles";
import { Link } from "umi";

const useStyles = createUseStyles(styles);

export default function AppLogo() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Link to="/">
      <img
        className={classes.appLogo}
        src={logo}
        alt="DEVocean"
        title="DEVocean"
      />
    </Link>
  );
}
