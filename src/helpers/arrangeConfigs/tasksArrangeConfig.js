const filterTypes = {
  priority: {
    type: "checkbox",
    label: "Priority",
    valueOptions: [
      {
        label: "Blocker",
        value: 5,
      },
      {
        label: "Highest",
        value: 4,
      },
      {
        label: "High",
        value: 3,
      },
      {
        label: "Medium",
        value: 2,
      },
      {
        label: "Low",
        value: 1,
      },
    ],
  },
  status: {
    type: "checkbox",
    label: "Status",
    valueOptions: [
      {
        label: "Open",
        value: "open",
      },
      {
        label: "WIP",
        value: "wip",
      },
      {
        label: "Closed",
        value: "closed",
      },
      {
        label: "Backlog",
        value: "backlog",
      },
    ],
  },
  // assignee: {
  //     type: "checkbox",
  //     valueOptions: [
  //         {
  //             label: "Open",
  //             value: "open",
  //         }, {
  //             label: "WIP",
  //             value: "wip",
  //         }, {
  //             label: "Closed",
  //             value: "closed"
  //         }, {
  //             label: "Backlog",
  //             value: "backlog",
  //         },
  //     ]
  // },
  // list: {}
};

const sortTypes = {
  priority: "Priority",
  status: "Status",
  reportedTime: "Reported time",
};

const listView = {
  sorts: {
    priority: sortTypes.priority,
    status: sortTypes.status,
    reportedTime: sortTypes.reportedTime,
    // "progress",
    // "updateDate",
    // "remainedTime",
  },
  filters: {
    priority: filterTypes.priority,
    status: filterTypes.status /*"assignee"*/,
  },
};

const kanbanView = {
  sorts: {
    priority: sortTypes.priority,
    reportedTime: sortTypes.reportedTime,
    // "progress",
    // "updateDate",
    // "remainedTime",
  },
  filters: {
    priority: filterTypes.priority /*list: filterTypes.list, "assignee"*/,
  },
};

const eventsView = {
  filters: {
    priority: filterTypes.priority,
    status: filterTypes.status /*"list", "assignee"*/,
  },
};

const teamView = {
  sorts: {
    priority: sortTypes.priority,
    reportedTime: sortTypes.reportedTime,
    // "progress",
    // "updateDate",
    // "remainedTime",
  },
  filters: { priority: filterTypes.priority, status: filterTypes.status },
};

export { listView, kanbanView, eventsView, teamView };
