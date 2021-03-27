import React, { useState } from "react";
import Dnd from "@bit/sadmammoth.components.react-dnd";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./DraggableList.styles";
import { useRecoilValue } from "recoil";
import userState from "../../../recoil/states/userState";
import StackLayout from "../layouts/StackLayout";

const useStyles = createUseStyles(styles);

const DraggableList = ({
  list,
  onOrderChange,
  draggableType,
  draggableAreaSize,
}) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const userId = useRecoilValue(userState);

  return (
    <Dnd.DraggableList
      list={list}
      onOrderChange={onOrderChange}
      indexKey="id"
      accept={{ "data-type": draggableType, userId }}
      dropAreaSize={draggableAreaSize}
      gap="10px"
    />
  );
};

export default DraggableList;
