import Duration from "./Duration";

import RelativeDate from "./RelativeDate";

export function taskConverter({ body }) {
  return body.map(({ estimate, reportedTime, ...other }) => ({
    estimate: estimate ? new Duration(estimate) : null,
    reportedTime: reportedTime ? new Duration(reportedTime) : null,
    ...other,
  }));
}

export function fullTaskConverter({ body }) {
  const { estimate, reportedTime, assignee, ...other } = body;
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

export function notificationConverter({ author, time, ...rest }) {
  return {
    ...rest,
    time: new RelativeDate(time),
    author: `${author.name} ${author.lastName[0]}`,
  };
}
