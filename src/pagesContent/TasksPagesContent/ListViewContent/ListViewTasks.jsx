import React, { useCallback, useState } from "react";
import { useRecoilValueLoadable } from "recoil";
import { tasksState_getByFolder } from "../../../recoil/states/tasksState";
import DraggableList from "../../../components/generic/DraggableList";
import DraggableTask from "../../../components/specific/DraggableTask";
import StackLayout from "../../../components/generic/layouts/StackLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./ListViewContent.styles";
import useLocale from "../../../helpers/useLocale";
import StateMonade from "../../../helpers/StateMonade";

const useStyles = createUseStyles(styles);

export default function ListViewTasks({ folderId, style }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const tasks = useRecoilValueLoadable(tasksState_getByFolder(folderId));

  const [draggableAreaSize, setDraggableAreaSize] = useState(
    theme.draggableAreaDefaultSize
  );

  const getList = useCallback(() => {
    return (
      tasks.state === "hasValue" &&
      tasks.contents
        .map((task) => {
          if (task)
            return (
              <DraggableTask
                key={task.id}
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
        .filter((item) => !!item)
    );
  }, [folderId, tasks]);

  return (
    <StateMonade state={tasks.state}>
      <StackLayout
        className={classes.list}
        orientation="horizontal"
        alignX="start"
        gap="10px"
        aria-label={locale("TaskList")}
        scroll
      >
        <DraggableList
          id="list"
          list={getList()}
          draggableType="task"
          draggableAreaSize={draggableAreaSize}
        />
      </StackLayout>
    </StateMonade>
  );
}
