import React from "react";
import PropTypes from "prop-types";
import StatusBadge from "../../components/specific/StatusBadge";
import TimeReportsBadge from "../../components/specific/TimeReportsBadge";
import AssigneeBadge from "../../components/specific/AssigneeBadge";
import PanelCard from "../../components/generic/PanelCard";
import StackLayout from "../../components/generic/layouts/StackLayout";
import PriorityBadge from "../../components/specific/PriorityBadge";

function TaskSidebar({
  classes,
  priority,
  assignee,
  status,
  estimate,
  reportedTime,
}) {
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
