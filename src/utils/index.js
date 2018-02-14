// @flow

export function fahrenheitToCelsius(fahrenheit: number): ?number {
  if (fahrenheit === undefined || fahrenheit === null) return null;
  const temperature = (fahrenheit - 32) * 5 / 9;
  return fixed(temperature, 2);
}

export function mphToKnots(mph: number): ?number {
  if (mph === undefined || mph === null) return null;
  const speed = mph * 0.86897624190816;
  return fixed(speed, 2);
}

export function fixed(number: number, nbDecimal: number): ?number {
  if (number === undefined || number === null) return null;
  return +number.toFixed(nbDecimal);
}

export function directionName(dir: number): string {
  const directionNames = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const sections = directionNames.length;
  const sect = 360 / sections;
  let x = Math.floor((dir + sect / 2) / sect);

  x = x >= sections ? 0 : x;

  return directionNames[x];
}
