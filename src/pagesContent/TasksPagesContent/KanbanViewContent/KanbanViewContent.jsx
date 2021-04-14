import React, { useCallback } from "react";
import SortTool from "../../../components/specific/SortTool";
import FilterTool from "../../../components/specific/FilterTool";
import ToolBar from "../../../components/generic/ToolBar";
import { useTheme, createUseStyles } from "react-jss";
import { useRecoilValueLoadable } from "recoil";
import classNames from "classnames";
import GridLayout from "../../../components/generic/layouts/GridLayout";
import StackLayout from "../../../components/generic/layouts/StackLayout";
import Sidebar from "../../../components/generic/Sidebar";
import StateMonade from "../../../helpers/StateMonade";
import useLocale from "../../../helpers/useLocale";
import { statusesState_getWithTasks } from "../../../recoil/states/statusesState";
import KanbanStatusList from "./KanbanStatusList";
import styles from "./KanbanViewContent.styles";
import { kanbanView } from "../../../helpers/arrangeConfigs/tasksArrangeConfig";

const useStyles = createUseStyles(styles);

const KanbanViewContent = () => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const statuses = useRecoilValueLoadable(statusesState_getWithTasks);

  const locale = useLocale();

  const renderStatusesLists = useCallback(() => {
    const { backlog, ...statusesList } = statuses.contents;
    return Object.entries(statusesList).map(([name, tasks]) => {
      return (
        <KanbanStatusList
          key={name}
          classes={classes}
          statusTitle={locale(name)}
          statusKey={name}
          tasks={tasks}
        />
      );
    });
  }, [statuses]);

  const { backlog } = statuses.contents;

  return (
    <GridLayout className={classNames(classes.grid, classes.paddingTop)}>
      <Sidebar column={3} title={locale("backlog")}>
        <StateMonade state={statuses.state}>
          <KanbanStatusList
            classes={classes}
            statusKey={"backlog"}
            tasks={backlog || []}
          ></KanbanStatusList>
        </StateMonade>
      </Sidebar>
      <StackLayout
        className={classes.paddingTop}
        column={7}
        orientation="horizontal"
        gap="20px"
        scroll
      >
        <StateMonade state={statuses.state}>
          {renderStatusesLists()}
        </StateMonade>
      </StackLayout>
      <ToolBar>
        <FilterTool
          filters={kanbanView.filters}
          applyFilter={(...data) => console.log(data)}
        />
        <SortTool
          sorts={kanbanView.sorts}
          applySorts={(...data) => console.log(data)}
        />
      </ToolBar>
    </GridLayout>
  );
};

export default KanbanViewContent;
