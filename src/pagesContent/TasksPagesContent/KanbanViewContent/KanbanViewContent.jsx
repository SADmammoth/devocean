import React, { useCallback, useState } from "react";
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
import TaskViewSwitch from "../TaskViewSwitch/TaskViewSwitch";
import Button from "../../../components/generic/Button";
import AddStatusForm from "./AddStatusForm";

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
          status={name}
          tasks={tasks}
        />
      );
    });
  }, [statuses]);

  const { backlog } = statuses.contents;

  const [showAddStatus, setShowAddStatus] = useState(false);
  console.log(statuses.state);

  return (
    <GridLayout className={classNames(classes.grid, classes.paddingTop)}>
      <Sidebar column={3} title={locale("backlog")}>
        <StateMonade state={statuses.state}>
          <KanbanStatusList
            classes={classes}
            status="backlog"
            tasks={backlog || []}
            showTitle={false}
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
          <Button onClick={() => setShowAddStatus((state) => !state)}>
            Add status
          </Button>
          {showAddStatus ? (
            <AddStatusForm
              onSubmit={() => setShowAddStatus(false)}
            ></AddStatusForm>
          ) : null}
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
        <TaskViewSwitch currentView="kanban" />
      </ToolBar>
    </GridLayout>
  );
};

export default KanbanViewContent;
