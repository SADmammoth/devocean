import React, { useEffect, useState } from "react";
import folderTreeState from "../../../recoil/states/folderTreeState";
import Spinner from "../../../components/generic/Spinner";
import { useTheme, createUseStyles } from "react-jss";
import {
  useRecoilState,
  useRecoilStateLoadable,
  useRecoilValueLoadable,
} from "recoil";
import DraggableList from "../../../components/generic/DraggableList/DraggableList";
import GridLayout from "../../../components/generic/layouts/GridLayout";
import Sidebar from "../../../components/generic/Sidebar";
import DraggableTask from "../../../components/specific/DraggableTask/DraggableTask";
import tasksState from "../../../recoil/states/tasksState";
import styles from "./ListViewContent.styles";
import FoldersTree from "../../../components/generic/FoldersTree";
import ListViewTasks from "./ListViewTasks";
import currentFolderState from "./currentFolderState";

const useStyles = createUseStyles(styles);

const ListViewContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const folders = useRecoilValueLoadable(folderTreeState);

  const [currentFolder, setCurrentFolder] = useRecoilStateLoadable(
    currentFolderState
  );

  const [currentFolderId, setCurrentFolderId] = useState();

  useEffect(() => {
    if (folders.state === "hasValue") {
      setCurrentFolderId(folders.contents[currentFolder.contents]?.id);
    }
  }, [folders, currentFolder]);

  return (
    <>
      <GridLayout>
        <Sidebar column={3}>
          {folders.state === "hasValue" ? (
            <FoldersTree
              folders={folders.contents}
              onSelectedChange={(index) => {
                setCurrentFolder(index);
              }}
            />
          ) : (
            <Spinner />
          )}
        </Sidebar>
        {currentFolderId ? (
          <ListViewTasks folderId={currentFolderId} />
        ) : (
          <Spinner />
        )}
      </GridLayout>
    </>
  );
};

export default ListViewContent;
