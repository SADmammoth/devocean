import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ListViewContent.styles";

const useStyles = createUseStyles(styles);

const ListViewContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div>Tasks list view</div>;
};

export default ListViewContent;
