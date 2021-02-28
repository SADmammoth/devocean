import React from "react";
import Container from "../Container";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Footer.styles";

const useStyles = createUseStyles(styles);

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <footer className={classes.footer}>
      <Container>Footer</Container>
    </footer>
  );
};

export default Footer;
