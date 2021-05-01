export default function ({
  title,
  description,
  priority,
  assignee,
  list,
  estimate,
  assigneeValueOptions,
  listValueOptions,
  status,
  statusValueOptions,
}) {
  return [
    {
      id: "title",
      name: "title",
      type: "text",
      label: "Title",
      placeholder: "Title",
      minSymbols: 5,
      maxSymbols: 50,
      required: true,
      value: title,
    },
    {
      id: "description",
      type: "textarea",
      name: "description",
      label: "Description",
      placeholder: "Description",
      minSymbols: 5,
      maxSymbols: 1000,
      required: true,
      value: description,
    },
    {
      id: "priority",
      name: "priority",
      type: "select",
      label: "Priority",
      valueOptions: [
        {
          label: "Low",
          value: "low",
        },
        {
          label: "Medium",
          value: "medium",
        },
        {
          label: "High",
          value: "high",
        },
        {
          label: "Highest",
          value: "highest",
        },
        {
          label: "Blocker",
          value: "blocker",
        },
      ],
      value: "low",
    },
    {
      id: "assignee",
      name: "teammate",
      type: "search",
      label: "Assignee",
      valueOptions: assigneeValueOptions,
      value: assignee,
    },
    {
      id: "list",
      name: "list",
      type: "search",
      label: "List",
      valueOptions: listValueOptions,
      value: list,
    },
    status
      ? {
          id: "status",
          name: "status",
          type: "select",
          label: "Status",
          valueOptions: statusValueOptions,
          value: status,
        }
      : {},
  ];
}
