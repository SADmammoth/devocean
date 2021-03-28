import React, { useEffect, useState } from "react";
import folderTreeState from "../../../recoil/states/folderTreeState";
import Spinner from "../../../components/generic/Spinner";
import { useTheme, createUseStyles } from "react-jss";
import { useRecoilStateLoadable, useRecoilValueLoadable } from "recoil";
import GridLayout from "../../../components/generic/layouts/GridLayout";
import Sidebar from "../../../components/generic/Sidebar";
import styles from "./ListViewContent.styles";
import FoldersTree from "../../../components/generic/FoldersTree";
import ListViewTasks from "./ListViewTasks";
import currentFolderState from "./localState/currentFolderState";
import StateMonade from "../../../helpers/StateMonade";
import StackLayout from "../../../components/generic/layouts/StackLayout";
import Text from "../../../components/generic/Text";
import useLocale from "../../../helpers/useLocale";

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

  const locale = useLocale();

  return (
    <>
      <GridLayout className={classes.grid}>
        <Sidebar column={3} className={classes.paddingTop}>
          <StateMonade state={folders.state}>
            <FoldersTree
              className={classes.folders}
              folders={folders.contents}
              onSelectedChange={(index) => {
                setCurrentFolder(index);
              }}
            />
          </StateMonade>
        </Sidebar>
        <StackLayout
          orientation="vertical"
          column={7}
          alignY="start"
          className={classes.paddingTop}
        >
          <Text type="h1">{locale("TaskList")}</Text>
          <StateMonade state={!!currentFolderId}>
            <ListViewTasks folderId={currentFolderId} />
          </StateMonade>
        </StackLayout>
      </GridLayout>
    </>
  );
};

export default ListViewContent;
