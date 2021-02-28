import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Footer.styles";

const useStyles = createUseStyles(styles);

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <footer className={classes.footer}>
      <ContainerLayout>Footer</ContainerLayout>
    </footer>
  );
};

export default Footer;
