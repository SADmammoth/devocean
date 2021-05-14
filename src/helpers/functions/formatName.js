export default function formatName({ name, lastName }) {
  if (!lastName) return 'undefined';
  return `${name} ${lastName[0]}.`;
}
