import React, { useCallback, useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useSetRecoilState } from 'recoil';

import DraggableList from '../../../../components/generic/DraggableList';
import ScrollLayout from '../../../../components/generic/layouts/ScrollLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
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

  const getList = useCallback(() => {
    return tasks
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
  }, [tasks]);

  return (
    <StackLayout orientation="vertical" alignY="start">
      {displayName && (
        <TeammateTitle id={id} displayName={displayName} image={avatar} />
      )}
      <ScrollLayout
        className={classes.list}
        orientation="vertical"
        scrollOrientation="vertical"
        alignY="start"
        gap="5px"
        aria-label={locale('TaskList')}>
        <DraggableList
          list={getList()}
          draggableType="task"
          draggableAreaSize={draggableAreaSize}
          onNewItem={({ id: taskId, assignee, index }) => {
            if (assignee) removeTask({ taskId, teammateId: assignee });
            addTask({ taskId, index });
          }}
        />
      </ScrollLayout>
    </StackLayout>
  );
}

TeammateTasksList.propTypes = {
  displayName: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  tasks: PropTypes.array.isRequired,
};

export default TeammateTasksList;
