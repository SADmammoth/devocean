export default function filterFalsy(object) {
  return Object.fromEntries(
    Object.entries(object).filter(([key, value]) => {
      return !!value;
    }),
  );
}
