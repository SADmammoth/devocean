import addTrailingZeros from "./addtrailingZeros";

export default function dateToString({ day, month, year, hours, minutes }) {
  return `${new Date().getFullYear()}-${addTrailingZeros(
    month
  )}-${addTrailingZeros(day)} ${addTrailingZeros(hours)}:${addTrailingZeros(
    minutes
  )}`;
}
