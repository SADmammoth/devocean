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
  template,
  templateValueOptions,
  templateOnChange,
  customFields,
}) {
  console.log(customFields);
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
    {
      id: "template",
      name: "template",
      type: "select",
      label: "Template",
      valueOptions: templateValueOptions,
      onChange: templateOnChange,
      value: template,
    },
    ...customFields.map((field) => {
      return { ...field, group: { id: "customFields", title: "CustomFields" } };
    }),
  ];
}
