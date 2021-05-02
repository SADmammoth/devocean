import Duration from "./Duration";
import formatName from "./formatName";

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
          displayName: formatName({
            name: assignee.name,
            lastName: assignee.lastName,
          }),
          id: assignee.id,
          assignedDate: new Duration(assignee.assignedDate),
        }
      : null,
    ...other,
  };
}
