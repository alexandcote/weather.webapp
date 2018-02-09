export function toCelsius(fahrenheit) {
  if (!fahrenheit) return "--";
  const temp = (fahrenheit - 32) * 5 / 9;
  return Math.round(temp * 10) / 10;
}
