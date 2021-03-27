import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useTheme } from "react-jss";
import Spinner from "../../../components/generic/Spinner";
import { useRecoilValueLoadable } from "recoil";
import { tasksState_getByFolder } from "../../../recoil/states/tasksState";
import DraggableList from "../../../components/generic/DraggableList/DraggableList";
import DraggableTask from "../../../components/specific/DraggableTask/DraggableTask";

export default function ListViewTasks({ folderId }) {
  const theme = useTheme();

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
    <div column={7}>
      {tasks.state === "hasValue" ? (
        <DraggableList
          list={getList()}
          draggableType="task"
          draggableAreaSize={draggableAreaSize}
        />
      ) : (
        <Spinner />
      )}
    </div>
  );
}
