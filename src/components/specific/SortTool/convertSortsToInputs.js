export default function convertSortsToInputs(sorts) {
  return [
    {
      type: "radio",
      name: "sorts",
      id: "sorts",
      valueOptions: Object.entries(sorts).map(([name, label]) => {
        return {
          value: name,
          label,
        };
      }),
    },
  ];
}
