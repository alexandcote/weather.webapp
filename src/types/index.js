export type Data = {
  time: string,
  inTemperature: number,
  outTemperature: number,
  inHumidity: number,
  outHumidity: number,
  rainRate: number,
  tenMinWindSpeed: number,
  windDirection: number,
  windSpeed: number
};

export type Station = {
  name: string,
  current: Data
};
