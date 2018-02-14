import { fahrenheitToCelsius, mphToKnots } from "./";

it("should convert fahrenheit to celsius", () => {
  const fahrenheit = 0;
  const celsius = -17.8;
  expect(fahrenheitToCelsius(fahrenheit)).toEqual(celsius);
});

it("should return invalid temperature when fahrenheit is undefined ", () => {
  const celsius = "--";
  expect(fahrenheitToCelsius()).toEqual(celsius);
});

it("should convert mph to knots", () => {
  const mph = 10;
  const knots = 8.7;
  expect(mphToKnots(mph)).toEqual(knots);
});

it("should return invalid speed when mph is undefined ", () => {
  const knots = "--";
  expect(mphToKnots()).toEqual(knots);
});
