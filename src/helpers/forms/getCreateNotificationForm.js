export default ({ shortText, fullText, dateTime, addressee }) => [
  {
    type: "text",
    name: "shortText",
    placeholder: "Short text (5-50 chars)",
    label: "Short text",
    minSymbols: 5,
    maxSymbols: 50,
    required: true,
    value: shortText,
  },
  {
    type: "textarea",
    name: "fullText",
    placeholder: "Full text",
    label: "Full text",
    minSymbols: 5,
    maxSymbols: 1000,
    required: true,
    value: fullText,
  },
  {
    type: "text",
    name: "dateTime",
    label: "Date and time",
    placeholder: "MM-dd-yyyy hh:mm",
    validator: "dateTimeByChar",
    mask: `99-99-${new Date()
      .getFullYear()
      .toString()
      .replace("9", "9\\")} 99:99`,
    maskType: "invisible",
    value: dateTime,
  },
  {
    type: "addressee",
    name: "addressee",
    label: "Addressee",
    value: addressee,
  },
];
