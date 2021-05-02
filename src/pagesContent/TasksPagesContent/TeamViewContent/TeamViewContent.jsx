import React, { useCallback, useEffect } from "react";
import ToolBar from "../../../components/generic/ToolBar";
import SortTool from "../../../components/specific/SortTool";
import FilterTool from "../../../components/specific/FilterTool";
import { useTheme, createUseStyles } from "react-jss";
import { useRecoilValueLoadable } from "recoil";
import GridLayout from "../../../components/generic/layouts/GridLayout";
import StackLayout from "../../../components/generic/layouts/StackLayout";
import Sidebar from "../../../components/generic/Sidebar";
import { teamView } from "../../../helpers/arrangeConfigs/tasksArrangeConfig";
import StateMonade from "../../../helpers/StateMonade";
import useLocale from "../../../helpers/useLocale";
import teammatesState, {
  teammatesState_getWithTasks,
} from "../../../recoil/states/teammatesState";
import TeammateTasksList from "./TeammateTasksList";
import styles from "./TeamViewContent.styles";
import TaskViewSwitch from "../TaskViewSwitch/TaskViewSwitch";

const useStyles = createUseStyles(styles);

const TeamViewContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const teammatesTasks = useRecoilValueLoadable(teammatesState);

  const renderLists = useCallback(() => {
    const { unassigned, ...list } = teammatesTasks.contents;

    console.log(teammatesTasks.contents);
    return Object.entries(list).map(
      ([id, { displayName, avatar, assignedTasks }]) => {
        return (
          <TeammateTasksList
            id={id}
            displayName={displayName}
            tasks={assignedTasks || []}
            avatar={avatar}
          />
        );
      }
    );
  }, [teammatesTasks.contents]);

  const { unassigned } = teammatesTasks.contents;
  const locale = useLocale();

  console.log(teammatesTasks.contents);

  return (
    <GridLayout className={classes.grid}>
      <Sidebar
        column={3}
        title={locale("Unassigned")}
        className={classes.paddingTop}
      >
        <StateMonade state={teammatesTasks.state}>
          <TeammateTasksList
            tasks={unassigned?.assignedTasks}
            avatar={unassigned?.avatar}
          />
        </StateMonade>
      </Sidebar>
      <StackLayout
        column={7}
        orientation="horizontal"
        gap="30px"
        className={classes.paddingTop}
        scroll
      >
        <StateMonade state={teammatesTasks.state}>{renderLists()}</StateMonade>
      </StackLayout>
      <ToolBar>
        <FilterTool
          filters={teamView.filters}
          applyFilter={(...data) => console.log(data)}
        />
        <SortTool
          sorts={teamView.sorts}
          applySorts={(...data) => console.log(data)}
        />
        <TaskViewSwitch currentView="team" />
      </ToolBar>
    </GridLayout>
  );
};

export default TeamViewContent;
