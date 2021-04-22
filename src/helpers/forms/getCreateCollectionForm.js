export default ({ type, name, parent, color }) => {
  return [
    {
      id: "name",
      type: "text",
      name: "name",
      label: "Name",
      placeholder: "Name",
      value: name,
    },
    {
      id: "type",
      type: "select",
      name: "type",
      label: "Type",
      value: type,

      valueOptions: [
        {
          label: "List",
          value: "list",
        },
        {
          label: "Folder",
          value: "folder",
        },
      ],
    },
    {
      id: "parent",
      type: "text",
      name: "parent",
      label: "Parent collection",
      value: parent,
    },
    (type && type === "folder") || {
      id: "color",
      type: "text",
      name: "color",
      label: "Color",
      value: color,
    },
  ];
};
