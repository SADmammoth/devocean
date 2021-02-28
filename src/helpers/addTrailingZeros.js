export default function addTrailingZeros(number) {
  return number <= 9 ? "0" + number : number;
}
