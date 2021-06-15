import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';

import { DropArea } from '@sadmammoth/react-dnd';

import draggableTypes from '../../../helpers/types/draggableTypes';
import {
  folderTreeState_addTask,
  folderTreeState_removeTask,
} from '../../../recoil/states/folderTreeState';

function FolderDropArea({
  id,
  classes,
  type,
  theme,
  index,
  selectFolder,
  children,
  setOpened,
}) {
  const addTaskToList = useSetRecoilState(folderTreeState_addTask(id));
  const removeTask = useSetRecoilState(folderTreeState_removeTask);

  return (
    <DropArea
      className={classes.dropArea}
      index={{ y: index, x: 0 }}
      onHovered={(dragging, index, accepted, mergeStyles) => {
        dragging.style.visibility = 'hidden';
        setOpened(true);
        if (accepted && type === 'list') {
          mergeStyles({
            filter: 'brightness(0.98)',
          });
        }
      }}
      onUnhovered={(dragging, index, accepted, mergeStyles) => {
        dragging.style.visibility = 'visible';
        if (accepted && type === 'list') {
          mergeStyles({ filter: 'brightness(1)' });
        }
      }}
      setData={({ id: taskId, list }) => {
        removeTask({ taskId, listId: list.id });
        addTaskToList(taskId);
        selectFolder(id);
      }}
      onAcceptedDragStart={(data, index, accepted, mergeStyles) => {
        if (accepted && type === 'list')
          mergeStyles({ filter: 'brightness(1.5)' });
      }}
      onAcceptedDragEnd={(data, index, accepted, mergeStyles) => {
        if (accepted && type === 'list')
          mergeStyles({ filter: 'brightness(1)' });

        dragging.style.visibility = 'visible';

        setOpened(false);
      }}>
      {children}
    </DropArea>
  );
}

FolderDropArea.propTypes = {};

export default FolderDropArea;
