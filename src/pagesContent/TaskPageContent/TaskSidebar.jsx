import React from "react";
import PropTypes from "prop-types";
import StatusBadge from "../../components/specific/StatusBadge";
import TimeReportsBadge from "../../components/specific/TimeReportsBadge";
import AssigneeBadge from "../../components/specific/AssigneeBadge";
import PanelCard from "../../components/generic/PanelCard";
import StackLayout from "../../components/generic/layouts/StackLayout";
import PriorityBadge from "../../components/specific/PriorityBadge";
import Button from "../../components/generic/Button";
import Interactive from "../../components/generic/Interactive";
import ReportPopup from "../../components/specific/ReportPopup/ReportPopup";
import { useSetRecoilState } from "recoil";
import { tasksState_delete } from "../../recoil/states/tasksState";
import showPopup from "../../helpers/showPopup";
import { history } from "umi";

function TaskSidebar({
  id,
  title,
  classes,
  priority,
  assignee,
  status,
  estimate,
  reportedTime,
}) {
  const ButtonLink = Interactive(Button);

  const deleteTask = useSetRecoilState(tasksState_delete(id));

  const popup = () =>
    showPopup({
      children: `Delete task "${title}"?`,
      closeButtonContent: "Yes",
    });

  return (
    <StackLayout
      className={classes.sidebarContent}
      orientation="vertical"
      gap="10px"
    >
      <PanelCard>
        <PriorityBadge priority={priority} />
      </PanelCard>
      {assignee ? (
        <PanelCard>
          <AssigneeBadge
            displayName={assignee.displayName}
            assignedDate={assignee.assignedDate}
          />
        </PanelCard>
      ) : null}
      {status ? (
        <PanelCard orientation="vertical">
          <StatusBadge
            status={status.name}
            timeInStatus={status.timeInStatus}
          />
          {estimate && reportedTime ? (
            <TimeReportsBadge estimate={estimate} reportedTime={reportedTime} />
          ) : null}
        </PanelCard>
      ) : null}
      <ButtonLink link={`${id}/edit`}>Edit</ButtonLink>
      <ButtonLink link={`${id}/comments`}>Comments</ButtonLink>
      <ReportPopup id={id} />
      <ButtonLink
        onClick={() => {
          popup().then(() => {
            history.push("/tasks");
            deleteTask();
          });
        }}
      >
        Delete
      </ButtonLink>
    </StackLayout>
  );
}

TaskSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  priority: PropTypes.string,
  assignee: PropTypes.string,
  status: PropTypes.string,
  estimate: PropTypes.object,
  reportedTime: PropTypes.object,
};

export default TaskSidebar;
