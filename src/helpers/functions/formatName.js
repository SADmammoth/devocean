export default function formatName({ name, shortName, lastName }) {
  if (!lastName) return 'undefined';
  return `${shortName || name} ${lastName[0]}.`;
}
