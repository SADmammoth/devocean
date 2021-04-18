import React from "react";
import StatusBadge from "../../components/specific/StatusBadge";
import TimeReportsBadge from "../../components/specific/TimeReportsBadge";
import AssigneeBadge from "../../components/specific/AssigneeBadge";
import PanelCard from "../../components/generic/PanelCard";
import StackLayout from "../../components/generic/layouts/StackLayout";
import PriorityBadge from "../../components/specific/PriorityBadge";

export default function TaskSidebar({ classes, fullTask }) {
  const { priority, assignee, status, estimate, reportedTime } = fullTask;
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
