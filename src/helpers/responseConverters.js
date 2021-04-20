import Duration from "./Duration";

import RelativeDate from "./RelativeDate";

export function taskConverter({ body }) {
  return body.map(({ estimate, reportedTime, ...other }) => ({
    estimate: estimate ? new Duration(estimate) : null,
    reportedTime: reportedTime ? new Duration(reportedTime) : null,
    ...other,
  }));
}

export function fullTaskConverter({
  estimate,
  reportedTime,
  assignee,
  ...other
}) {
  return {
    estimate: estimate ? new Duration(estimate) : null,
    reportedTime: reportedTime ? new Duration(reportedTime) : null,
    assignee: assignee
      ? {
          displayName: `${assignee.name} ${assignee.lastName[0]}.`,
          id: assignee.id,
          assignedDate: new Duration(assignee.assignedDate),
        }
      : null,
    ...other,
  };
}
