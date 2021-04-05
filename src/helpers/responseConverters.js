import Duration from "./Duration";

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
          dateAssigned: assignee.dateAssigned,
        }
      : null,
    ...other,
  };
}
