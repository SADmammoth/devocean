import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./KanbanViewContent.styles";

const useStyles = createUseStyles(styles);

const KanbanViewContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return <div>Tasks kanban view</div>;
};

export default KanbanViewContent;
