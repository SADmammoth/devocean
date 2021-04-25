import React from "react";
import draggableTypes from "../../../helpers/draggableTypes";
import { DropArea } from "@sadmammoth/react-dnd";
import PropTypes from "prop-types";
import { useSetRecoilState } from "recoil";
import {
  folderTreeState_addTask,
  folderTreeState_removeTask,
} from "../../../recoil/states/folderTreeState";

function FolderDropArea({ id, selectFolder, children }) {
  const addTaskToList = useSetRecoilState(folderTreeState_addTask(id));
  const removeTask = useSetRecoilState(folderTreeState_removeTask);

  return (
    <DropArea
      accept={{ draggableType: draggableTypes.task }}
      onHovered={(data, index, accepted, mergeStyles) => {
        if (accepted) {
          mergeStyles({
            border: "2px solid red",
          });
        }
      }}
      onUnhovered={(data, index, accepted, mergeStyles) => {
        if (accepted) {
          mergeStyles({
            border: "none",
          });
        }
      }}
      setData={({ id: taskId, list }) => {
        removeTask({ taskId, listId: list.id });
        addTaskToList(taskId);
        selectFolder(id);
      }}
    >
      {children}
    </DropArea>
  );
}

FolderDropArea.propTypes = {};

export default FolderDropArea;
