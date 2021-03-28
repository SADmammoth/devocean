import React, { useCallback } from "react";
import { useTheme, createUseStyles } from "react-jss";
import { useRecoilValueLoadable } from "recoil";
import GridLayout from "../../../components/generic/layouts/GridLayout";
import StackLayout from "../../../components/generic/layouts/StackLayout";
import Sidebar from "../../../components/generic/Sidebar";
import StateMonade from "../../../helpers/StateMonade";
import useLocale from "../../../helpers/useLocale";
import { teammatesState_getWithTasks } from "../../../recoil/states/teammatesState";
import TeammateTasksList from "./TeammateTasksList";
import styles from "./TeamViewContent.styles";

const useStyles = createUseStyles(styles);

const TeamViewContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const teammatesTasks = useRecoilValueLoadable(teammatesState_getWithTasks);

  const renderLists = useCallback(() => {
    const { unassigned, ...list } = teammatesTasks.contents;
    return Object.entries(list).map(
      ([id, { displayName, avatar, assignedTasks }]) => {
        return (
          <TeammateTasksList
            displayName={displayName}
            tasks={assignedTasks || []}
            avatar={avatar}
          />
        );
      },
      []
    );
  }, [teammatesTasks]);

  const { unassigned } = teammatesTasks.contents;
  const locale = useLocale();

  return (
    <GridLayout className={classes.grid}>
      <Sidebar
        column={3}
        title={locale("Unassigned")}
        className={classes.paddingTop}
      >
        <StateMonade state={teammatesTasks.state}>
          <TeammateTasksList
            tasks={unassigned.assignedTasks}
            avatar={unassigned.avatar}
          />
        </StateMonade>
      </Sidebar>
      <StackLayout
        column={7}
        orientation="horizontal"
        gap="30px"
        className={classes.paddingTop}
      >
        <StateMonade state={teammatesTasks.state}>{renderLists()}</StateMonade>
      </StackLayout>
    </GridLayout>
  );
};

export default TeamViewContent;
