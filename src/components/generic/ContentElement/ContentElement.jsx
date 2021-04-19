import React from "react";
import PropTypes from "prop-types";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ContentElement.styles";
import ContainerLayout from "../layouts/ContainerLayout";

const useStyles = createUseStyles(styles);

function ContentElement({ children }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <main className={classes.main}>
      <ContainerLayout className={classes.content}>{children}</ContainerLayout>
    </main>
  );
}

ContentElement.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentElement;
