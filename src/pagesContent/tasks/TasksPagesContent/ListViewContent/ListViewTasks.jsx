import React, { useCallback, useState } from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable } from 'recoil';

import DraggableList from '../../../../components/generic/DraggableList';
import ScrollLayout from '../../../../components/generic/layouts/ScrollLayout/ScrollLayout';
import StackLayout from '../../../../components/generic/layouts/StackLayout';
import DraggableTask from '../../../../components/specific/DraggableTask';
import StateMonade from '../../../../helpers/components/StateMonade';
import useLocale from '../../../../helpers/hooks/useLocale';
import { tasksState_getByFolder } from '../../../../recoil/states/tasksState';

import styles from './ListViewContent.styles';

const useStyles = createUseStyles(styles);

function ListViewTasks({ folderId, style }) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  const tasks = useRecoilValueLoadable(tasksState_getByFolder(folderId));

  const [draggableAreaSize, setDraggableAreaSize] = useState(
    theme.draggableAreaDefaultSize,
  );

  const getList = useCallback(() => {
    return (
      tasks.state === 'hasValue' &&
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
      <ScrollLayout
        className={classes.list}
        orientation="horizontal"
        gap="10px"
        aria-label={locale('TaskList')}
        scrollPaddingEnd="0px">
        <DraggableList
          id="list"
          list={getList()}
          draggableType="task"
          draggableAreaSize={draggableAreaSize}
        />
      </ScrollLayout>
    </StateMonade>
  );
}

ListViewTasks.propTypes = {
  folderId: PropTypes.string,
  style: PropTypes.object,
};

export default ListViewTasks;
