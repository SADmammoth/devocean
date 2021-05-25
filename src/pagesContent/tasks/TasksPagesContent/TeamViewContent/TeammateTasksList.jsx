import React, { useCallback, useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useSetRecoilState } from 'recoil';

import DraggableList from '../../../../components/generic/DraggableList';
import ItemsList from '../../../../components/generic/ItemsList';
import ScrollLayout from '../../../../components/generic/layouts/ScrollLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
import StretchLastLayout from '../../../../components/generic/layouts/StretchLastLayout';
import DraggableTask from '../../../../components/specific/DraggableTask';
import TeammateTitle from '../../../../components/specific/TeammateTitle';
import useLocale from '../../../../helpers/hooks/useLocale';
import {
  teammatesState_addTask,
  teammatesState_removeTask,
} from '../../../../recoil/states/teammatesState';

import styles from './TeamViewContent.styles';

const useStyles = createUseStyles(styles);

function TeammateTasksList({ id, displayName, avatar, tasks }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const [draggableAreaSize, setDraggableAreaSize] = useState(
    theme.draggableAreaDefaultSize,
  );

  const removeTask = useSetRecoilState(teammatesState_removeTask);
  const addTask = useSetRecoilState(teammatesState_addTask(id));

  const ItemsContainer = ({ children, ...props }) => (
    <ScrollLayout
      orientation="vertical"
      scrollOrientation="vertical"
      alignY="start"
      gap="0"
      aria-label={locale('TaskList')}
      {...props}>
      <DraggableList
        list={children}
        draggableType="task"
        draggableAreaSize={draggableAreaSize}
        onNewItem={({ id: taskId, assignee, index }) => {
          if (assignee) removeTask({ taskId, teammateId: assignee });
          addTask({ taskId, index });
        }}
      />
    </ScrollLayout>
  );

  return (
    <StretchLastLayout orientation="vertical" alignY="start">
      {displayName && (
        <TeammateTitle id={id} displayName={displayName} image={avatar} />
      )}
      <ItemsList
        className={classNames({ [classes.list]: !!displayName })}
        placeholderClassName={classNames({
          [classes.placeholderList]: !!displayName,
        })}
        as={ItemsContainer}
        items={tasks}
        renderItem={(task) => {
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
        }}
        emptyMessage={`Drag and drop task cards here to ${
          displayName ? `assign to ${displayName}` : 'unassign'
        }`}
      />
    </StretchLastLayout>
  );
}

TeammateTasksList.propTypes = {
  displayName: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  tasks: PropTypes.array.isRequired,
};

export default TeammateTasksList;
