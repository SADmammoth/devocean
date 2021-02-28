import React from "react";
import Container from "../Container";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Header.styles";

const useStyles = createUseStyles(styles);

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <header className={classes.header}>
      <Container>Header</Container>
    </header>
  );
};

export default Header;
