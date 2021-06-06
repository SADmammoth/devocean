import React from 'react';

import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';

import { DropArea } from '@sadmammoth/react-dnd';

import draggableTypes from '../../../helpers/types/draggableTypes';
import {
  folderTreeState_addTask,
  folderTreeState_removeTask,
} from '../../../recoil/states/folderTreeState';

function FolderDropArea({ id, index, selectFolder, children }) {
  const addTaskToList = useSetRecoilState(folderTreeState_addTask(id));
  const removeTask = useSetRecoilState(folderTreeState_removeTask);

  return (
    <DropArea
      index={{ y: index, x: 0 }}
      onHovered={(dragging, index, accepted, mergeStyles) => {
        if (accepted) {
          dragging.style.visibility = 'hidden';
          mergeStyles({
            border: '2px solid red',
          });
        }
      }}
      onUnhovered={(dragging, index, accepted, mergeStyles) => {
        if (accepted) {
          dragging.style.visibility = 'visible';
          mergeStyles({
            border: 'none',
          });
        }
      }}
      setData={({ id: taskId, list }) => {
        removeTask({ taskId, listId: list.id });
        addTaskToList(taskId);
        selectFolder(id);
      }}
      onAcceptedDragStart={(data, index, accepted, mergeStyles) => {
        mergeStyles({
          border: '2px solid green',
        });
      }}
      onAcceptedDragEnd={(data, index, accepted, mergeStyles) => {
        mergeStyles({
          border: 'none',
        });
      }}>
      {children}
    </DropArea>
  );
}

FolderDropArea.propTypes = {};

export default FolderDropArea;
