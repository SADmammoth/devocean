import Duration from '../Duration';

export default function ({
  title,
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
  return [
    {
      id: 'title',
      name: 'title',
      type: 'text',
      label: 'Title',
      placeholder: 'Title',
      minSymbols: 5,
      maxSymbols: 50,
      required: true,
      value: title,
    },
    {
      id: 'priority',
      name: 'priority',
      type: 'select',
      label: 'Priority',
      valueOptions: [
        {
          label: 'Low',
          value: 'low',
        },
        {
          label: 'Medium',
          value: 'medium',
        },
        {
          label: 'High',
          value: 'high',
        },
        {
          label: 'Highest',
          value: 'highest',
        },
        {
          label: 'Blocker',
          value: 'blocker',
        },
      ],
      value: 'low',
    },
    {
      id: 'assignee',
      name: 'teammate',
      type: 'search',
      label: 'Assignee',
      valueOptions: assigneeValueOptions,
      value: assignee,
    },
    {
      id: 'estimate',
      name: 'estimate',
      type: 'text',
      label: 'Estimated time',
      placeholder: 'Type estimate',
      validator: (value) => {
        return !_.isNaN(new Duration(value).value);
      },
      value: estimate
        ? new Duration(new String(estimate)).toString()
        : estimate,
    },
    {
      id: 'list',
      name: 'list',
      type: 'search',
      label: 'List',
      valueOptions: listValueOptions,
      value: list,
    },
    status
      ? {
          id: 'status',
          name: 'status',
          type: 'select',
          label: 'Status',
          valueOptions: statusValueOptions,
          value: status,
        }
      : {},
    {
      id: 'template',
      name: 'template',
      type: 'select',
      label: 'Template',
      valueOptions: templateValueOptions,
      onChange: templateOnChange,
      value: template,
    },
    ...customFields.map((field) => {
      return { ...field, group: { id: 'customFields', title: 'CustomFields' } };
    }),
  ];
}
