import React, { useCallback, useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import { useSetRecoilState } from 'recoil';

import DraggableList from '../../../../components/generic/DraggableList';
import ItemsList from '../../../../components/generic/ItemsList';
import Text from '../../../../components/generic/Text';
import ScrollLayout from '../../../../components/generic/layouts/ScrollLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
import StretchLastLayout from '../../../../components/generic/layouts/StretchLastLayout';
import DraggableTask from '../../../../components/specific/DraggableTask';
import showPopup from '../../../../helpers/components/showPopup';
import useLocale from '../../../../helpers/hooks/useLocale';
import {
  statusesState_addTask,
  statusesState_removeTask,
} from '../../../../recoil/states/statusesState';

function KanbanStatusList({ classes, tasks, status, showTitle }) {
  const locale = useLocale();
  const theme = useTheme();
  const [draggableAreaSize, setDraggableAreaSize] = useState(
    theme.draggableAreaDefaultSize,
  );

  const changeStatus = useSetRecoilState(statusesState_addTask(status));
  const removeTask = useSetRecoilState(statusesState_removeTask);

  const onNewItem = async ({ id: taskId, status: oldStatus, index }) => {
    const { text } = await showPopup({
      children: `Changing status to ${locale(status)}`,
      closeButtonContent: 'Confirm',
      cancelText: 'Cancel',
      inputs: [
        {
          type: 'textarea',
          name: 'text',
          label: 'Status change comment',
        },
      ],
    });
    removeTask({
      taskId,
      statusName: oldStatus?.name,
    });
    changeStatus({ taskId, text, index });
  };

  const ItemsContainer = (children) => (
    <ScrollLayout
      className={classes.list}
      orientation="vertical"
      scrollOrientation="vertical"
      blockSnapType="start"
      alignY="start"
      gap="-10px"
      aria-label={locale('TaskList')}
      nowrap>
      <DraggableList
        list={children}
        draggableType="task"
        draggableAreaSize={draggableAreaSize}
        onNewItem={onNewItem}
      />
    </ScrollLayout>
  );

  return (
    <StretchLastLayout orientation="vertical" alignY="start" gap="10px">
      {!showTitle || <Text type="big">{locale(status)}</Text>}
      <ItemsList
        className={classes.list}
        placeholderClassName={classNames({
          [classes.placeholderList]: showTitle,
        })}
        as={ItemsContainer}
        items={tasks}
        renderItem={(task) => {
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
        }}
        emptyMessage={`Drag and drop task cards there to set status "${locale(
          status,
        )}"`}
      />
    </StretchLastLayout>
  );
}

KanbanStatusList.propTypes = {
  classes: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  showTitle: PropTypes.bool,
};

KanbanStatusList.defaultProps = {
  showTitle: true,
};

export default KanbanStatusList;
