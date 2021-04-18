import React from "react";
import { useTheme, createUseStyles } from "react-jss";
import { DraggableElement as DndDraggableElement } from "@sadmammoth/react-dnd";
import styles from "./DraggableElement.styles";

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
    <DndDraggableElement
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
    </DndDraggableElement>
  );
};

export default DraggableElement;
