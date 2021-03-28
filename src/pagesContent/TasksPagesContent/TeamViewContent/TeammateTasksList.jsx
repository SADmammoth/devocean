import React, { useCallback, useState } from "react";
import DraggableList from "../../../components/generic/DraggableList/DraggableList";
import DraggableTask from "../../../components/specific/DraggableTask/DraggableTask";
import StackLayout from "../../../components/generic/layouts/StackLayout";
import { useTheme, createUseStyles } from "react-jss";
import styles from "./TeamViewContent.styles";
import { Composite, useCompositeState } from "reakit";
import useLocale from "../../../helpers/useLocale";
import TeammateTitle from "../../../components/specific/TeammateTitle";

const useStyles = createUseStyles(styles);

export default function TeammateTasksList({ displayName, avatar, tasks }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const [draggableAreaSize, setDraggableAreaSize] = useState(
    theme.draggableAreaDefaultSize
  );

  const composite = useCompositeState({
    orientation: "horizontal",
    wrap: true,
    unstable_virtual: true,
  });

  const getList = useCallback(() => {
    return tasks
      .map((task) => {
        if (task)
          return (
            <DraggableTask
              composite={composite}
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
  }, [tasks]);

  return (
    <StackLayout orientation="vertical" alignY="start">
      {displayName && (
        <TeammateTitle displayName={displayName} image={avatar} />
      )}
      <StackLayout
        as={Composite}
        {...composite}
        className={classes.list}
        orientation="vertical"
        alignY="start"
        gap="5px"
        aria-label={locale("TaskList")}
      >
        <DraggableList
          list={getList()}
          draggableType="task"
          draggableAreaSize={draggableAreaSize}
        />
      </StackLayout>
    </StackLayout>
  );
}
