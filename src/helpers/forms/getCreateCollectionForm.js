export default ({ type, name, parent, color, parentValueOptions }) => {
  return [
    {
      id: 'name',
      type: 'text',
      name: 'name',
      label: 'Name',
      placeholder: 'Name',
      value: name,
    },
    {
      id: 'type',
      type: 'select',
      name: 'type',
      label: 'Type',
      value: type,

      valueOptions: [
        {
          label: 'List',
          value: 'list',
        },
        {
          label: 'Folder',
          value: 'folder',
        },
      ],
    },
    {
      id: 'parent',
      type: 'search',
      name: 'parent',
      label: 'Parent collection',
      value: parent,
      valueOptions: parentValueOptions,
    },
    (type && type === 'folder') || {
      id: 'color',
      type: 'color',
      name: 'color',
      label: 'Color',
      value: color,
    },
  ];
};
