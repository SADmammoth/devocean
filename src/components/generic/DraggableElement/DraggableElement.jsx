import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import Dnd from "@bit/sadmammoth.components.react-dnd";
import styles from "./DraggableElement.styles";
import TaskCard from "../../specific/TaskCard/TaskCard";

const useStyles = createUseStyles(styles);

const DraggableElement = ({
  id,
  height,
  draggableType,
  content,
  avatar,
  data,
  onDragStart,
  onDragEnd,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Dnd.DraggableElement
      id={id}
      key={id}
      data={{ "data-type": draggableType, id, ...data }}
      avatar={avatar}
      rootElement={document}
      height={height}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {content}
    </Dnd.DraggableElement>
  );
};

export default DraggableElement;
