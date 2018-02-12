export function fahrenheitToCelsius(fahrenheit) {
  if (!fahrenheit) return "--";
  const temp = (fahrenheit - 32) * 5 / 9;
  return Math.round(temp * 10) / 10;
}

export function mphToKnots(mph) {
  const speed = mph * 0.86897624190816;
  return Math.round(speed * 10) / 10;
}
