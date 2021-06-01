export default function getSectorGradient(percent, background, foreground) {
  if (percent < 50) {
    return `linear-gradient(calc(90deg + ${percent} * 3.6deg), transparent 50%, ${background} 50%), linear-gradient(90deg, ${background} 50%, transparent 50%)`;
  }
  if (percent === 50) {
    return `linear-gradient(90deg, ${background} 50%, transparent 50%)`;
  }
  if (percent > 50 && percent < 100) {
    return `linear-gradient(calc(-1 * 90deg + ${percent} * 3.6deg), transparent 50%, ${foreground} 50%), linear-gradient(90deg, ${background} 50%, transparent 50%)`;
  }
  if (percent === 100) {
    return `none`;
  }
}
