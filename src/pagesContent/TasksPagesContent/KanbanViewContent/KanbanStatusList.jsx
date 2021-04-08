import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import StackLayout from "../../../components/generic/layouts/StackLayout";
import DraggableList from "../../../components/generic/DraggableList/DraggableList";
import { Composite, useCompositeState } from "reakit";
import useLocale from "../../../helpers/useLocale";
import { useTheme } from "react-jss";
import Text from "../../../components/generic/Text";
import DraggableTask from "../../../components/specific/DraggableTask/DraggableTask";

function KanbanStatusList({ classes, tasks, statusTitle, statusKey }) {
  const composite = useCompositeState();
  const locale = useLocale();
  const theme = useTheme();
  const [draggableAreaSize, setDraggableAreaSize] = useState(
    theme.draggableAreaDefaultSize
  );

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
      {statusTitle && <Text type="big">{statusTitle}</Text>}
      <StackLayout
        as={Composite}
        {...composite}
        className={classes.list}
        orientation="vertical"
        alignY="start"
        gap="5px"
        aria-label={locale("TaskList")}
        scroll
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

KanbanStatusList.propTypes = {};

export default KanbanStatusList;
