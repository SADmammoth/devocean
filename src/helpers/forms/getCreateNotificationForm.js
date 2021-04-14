export default ({ title, description, time, author }) => [
  {
    type: "text",
    name: "title",
    placeholder: "Short text (5-50 chars)",
    label: "Short text",
    minSymbols: 5,
    maxSymbols: 50,
    required: true,
    value: title,
  },
  {
    type: "textarea",
    name: "description",
    placeholder: "Full text",
    label: "Full text",
    minSymbols: 5,
    maxSymbols: 1000,
    required: true,
    value: description,
  },
  {
    type: "text",
    name: "time",
    label: "Date and time",
    placeholder: "MM-dd-yyyy hh:mm",
    validator: "dateTimeByChar",
    mask: `99-99-${new Date()
      .getFullYear()
      .toString()
      .replace("9", "9\\")} 99:99`,
    maskType: "invisible",
    value: time,
  },
  {
    type: "text",
    name: "author",
    label: "Author",
    value: author,
  },
];
