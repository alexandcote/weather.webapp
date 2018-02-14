import { fahrenheitToCelsius, mphToKnots, directionName } from "./";

it("should convert fahrenheit to celsius", () => {
  const fahrenheit = 0;
  const celsius = -17.78;
  expect(fahrenheitToCelsius(fahrenheit)).toEqual(celsius);
});

it("should return invalid temperature when fahrenheit is undefined ", () => {
  const celsius = null;
  expect(fahrenheitToCelsius()).toEqual(celsius);
});

it("should convert mph to knots", () => {
  const mph = 10;
  const knots = 8.69;
  expect(mphToKnots(mph)).toEqual(knots);
});

it("should return invalid speed when mph is undefined ", () => {
  const knots = null;
  expect(mphToKnots()).toEqual(knots);
});

it("return the correct direction name", () => {
  const direction = 180;
  expect(directionName(direction)).toEqual("S");
});
