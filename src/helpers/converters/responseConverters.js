import formatName from '../functions/formatName';
import Duration from '../types/Duration';
import RelativeDate from '../types/RelativeDate';

export function taskConverter({ body }) {
  return body.map(({ estimate, reportedTime, ...other }) => ({
    estimate: estimate ? new Duration(estimate + 'h') : null,
    reportedTime: reportedTime ? new Duration(reportedTime + 'h') : null,
    ...other,
  }));
}

export function fullTaskConverter({
  body: { estimate, reportedTime, assignee, ...other },
}) {
  return {
    estimate: estimate ? new Duration(estimate + 'h') : null,
    reportedTime: reportedTime ? new Duration(reportedTime + 'h') : null,
    assignee: assignee
      ? {
          displayName: formatName({
            name: assignee.name,
            lastName: assignee.lastName,
            shortName: assignee.shortName,
          }),
          avatar: assignee.avatar,
          id: assignee.id,
          assignedDate: new Duration(assignee.assignedDate),
        }
      : null,
    ...other,
  };
}

export function navItemsConverter({ body }) {
  return body.map(({ label, link }) => {
    return { label, title: label, link };
  });
}
