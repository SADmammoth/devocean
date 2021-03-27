import React, { useCallback, useState } from "react";
import Spinner from "../../../components/generic/Spinner";
import { useRecoilValueLoadable } from "recoil";
import { tasksState_getByFolder } from "../../../recoil/states/tasksState";
import DraggableList from "../../../components/generic/DraggableList/DraggableList";
import DraggableTask from "../../../components/specific/DraggableTask/DraggableTask";
import StackLayout from "../../../components/generic/layouts/StackLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ListViewContent.styles";

const useStyles = createUseStyles(styles);

export default function ListViewTasks({ folderId, style }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const tasks = useRecoilValueLoadable(tasksState_getByFolder(folderId));

  const [draggableAreaSize, setDraggableAreaSize] = useState(
    theme.draggableAreaDefaultSize
  );

  const getList = useCallback(() => {
    return tasks.contents
      .map((task) => {
        if (task)
          return (
            <DraggableTask
              {...task}
              onDragStart={({ height }) => {
                setDraggableAreaSize(height);
              }}
              onDragEnd={() =>
                setDraggableAreaSize(theme.draggableAreaDefaultSize)
              }
            />
          );
      })
      .filter((item) => !!item);
  }, [folderId, tasks]);

  return (
    <div style={style}>
      {tasks.state === "hasValue" ? (
        <StackLayout
          className={classes.list}
          orientation="horizontal"
          alignX="start"
          gap="10px"
        >
          <DraggableList
            list={getList()}
            draggableType="task"
            draggableAreaSize={draggableAreaSize}
          />
        </StackLayout>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
