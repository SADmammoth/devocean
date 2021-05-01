import React, { useState } from "react";
import PropTypes from "prop-types";
import { DraggableList as DndDraggableList } from "@sadmammoth/react-dnd";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./DraggableList.styles";
import { useRecoilValue } from "recoil";
import userState from "../../../recoil/states/userState";

const useStyles = createUseStyles(styles);

function DraggableList({
  id,
  list,
  onOrderChange,
  onNewItem,
  draggableType,
  draggableAreaSize,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const userId = useRecoilValue(userState);

  return (
    <DndDraggableList
      id={id}
      list={list}
      onOrderChange={onOrderChange}
      indexKey="id"
      accept={{ "data-type": draggableType, userId }}
      dropAreaSize={draggableAreaSize}
      gap="10px"
      onNewItem={onNewItem}
    />
  );
}

DraggableList.propTypes = {
  id: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.node).isRequired,
  onOrderChange: PropTypes.func.isRequired,
  draggableType: PropTypes.string,
  draggableAreaSize: PropTypes.string,
};

DraggableList.defaultProps = {
  draggableAreaSize: "50px",
};

export default DraggableList;
