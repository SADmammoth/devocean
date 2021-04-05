export default function convertFiltersToInputs(filters) {
  return Object.entries(filters).map(([name, value]) => {
    return {
      ...value,
      name,
      id: name,
    };
  });
}
