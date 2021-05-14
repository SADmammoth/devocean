import React, { useCallback, useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme } from 'react-jss';
import { useSetRecoilState } from 'recoil';

import DraggableList from '../../../../components/generic/DraggableList';
import Text from '../../../../components/generic/Text';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
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

  const getList = useCallback(() => {
    return tasks
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
      .filter((item) => !!item);
  }, [tasks]);

  return (
    <StackLayout orientation="vertical" alignY="start">
      {!showTitle || <Text type="big">{locale(status)}</Text>}
      <StackLayout
        className={classes.list}
        orientation="vertical"
        alignY="start"
        gap="5px"
        aria-label={locale('TaskList')}
        scroll>
        <DraggableList
          list={getList()}
          draggableType="task"
          draggableAreaSize={draggableAreaSize}
          onNewItem={async ({ id: taskId, status: oldStatus }) => {
            const { text } = await showPopup({
              children: `Changing status to ${locale(status)}`,
              closeButtonContent: 'Confirm',
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
            changeStatus({ taskId, text });
          }}
        />
      </StackLayout>
    </StackLayout>
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
