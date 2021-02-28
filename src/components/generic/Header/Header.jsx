import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./Header.styles";

const useStyles = createUseStyles(styles);

const Header = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <header className={classes.header}>
      <ContainerLayout>Header</ContainerLayout>
    </header>
  );
};

export default Header;
