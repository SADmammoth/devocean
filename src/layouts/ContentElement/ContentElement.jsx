import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ContentElement.styles";
import ContainerLayout from "../../components/generic/layouts/ContainerLayout";

const useStyles = createUseStyles(styles);

const ContentElement = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <main className={classes.main}>
      <ContainerLayout className={classes.content}>{children}</ContainerLayout>
    </main>
  );
};

export default ContentElement;
