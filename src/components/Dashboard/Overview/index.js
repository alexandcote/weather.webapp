// @flow
import React from "react";

import moment from "moment";
import AmCharts from "@amcharts/amcharts3-react";

import { fahrenheitToCelsius, mphToKnots, fixed, directionName } from "utils";

type Props = {
  datas: any
};

const config = {
  type: "serial",
  theme: "light",
  legend: {
    useGraphSettings: true
  },
  marginRight: 120,
  marginLeft: 120,
  margin: 60,
  autoMarginOffset: 20,
  mouseWheelZoomEnabled: true,
  synchronizeGrid: true,
  valueAxes: [
    {
      id: "v1",
      axisAlpha: 1,
      unit: " ℃",
      position: "left",
      ignoreAxisWidth: true
    },
    {
      id: "v2",
      axisAlpha: 1,
      unit: " kn",
      position: "right",
      ignoreAxisWidth: true
    },
    {
      id: "v3",
      axisAlpha: 1,
      offset: 50,
      position: "right",
      ignoreAxisWidth: true,
      labelFunction: directionName
    },
    {
      id: "v4",
      axisAlpha: 1,
      unit: " %",
      offset: 50,
      position: "left",
      ignoreAxisWidth: true
    }
  ],
  graphs: [
    {
      valueAxis: "v1",
      lineThickness: 2,
      title: "Ouside Temperature",
      valueField: "outTemperature",
      fillAlphas: 0.1,
      balloonText: "[[value]] ℃"
    },
    {
      valueAxis: "v2",
      lineThickness: 2,
      title: "Wind Speed",
      valueField: "windSpeed",
      fillAlphas: 0.1,
      balloonText: "[[value]] kn"
    },
    {
      valueAxis: "v3",
      lineThickness: 2,
      title: "Wind Direction",
      valueField: "windDirection",
      balloonFunction: (graphDataItem, _) =>
        directionName(graphDataItem.values.value)
    },
    {
      valueAxis: "v4",
      lineThickness: 2,
      hidden: true,
      title: "Ouside Humidity",
      valueField: "outHumidity",
      balloonText: "[[value]] %"
    },
    {
      valueAxis: "v1",
      lineThickness: 2,
      hidden: true,
      title: "Inside Temperature",
      valueField: "inTemperature",
      balloonText: "[[value]] ℃"
    },
    {
      valueAxis: "v4",
      lineThickness: 2,
      hidden: true,
      title: "Inside Humidity",
      valueField: "inHumidity",
      balloonText: "[[value]] %"
    }
  ],
  chartScrollbar: {
    autoGridCount: true,
    graph: "g1",
    scrollbarHeight: 40,
    usePeriod: "DD"
  },
  chartCursor: {
    pan: true,
    valueLineEnabled: true,
    cursorAlpha: 1,
    cursorColor: "#258cbb",
    valueLineAlpha: 0.2,
    valueZoomable: true
  },
  categoryField: "date",
  categoryAxis: {
    minPeriod: "hh",
    parseDates: true,
    dashLength: 1,
    minorGridEnabled: true
  }
};

const configure = function(datas) {
  const dataStream = datas.map(d => ({
    date: moment(d.time).format(),
    outTemperature: fahrenheitToCelsius(d.outTemperature),
    outHumidity: fixed(d.outHumidity, 2),
    inTemperature: fahrenheitToCelsius(d.inTemperature),
    inHumidity: fixed(d.inHumidity, 2),
    windSpeed: mphToKnots(d.windSpeed),
    windDirection: fixed(d.windDirection, 0)
  }));
  return { ...config, dataProvider: dataStream.reverse() };
};

const Overview = ({ datas }: Props) => (
  <div>
    <AmCharts.React
      style={{ width: "100%", height: "500px" }}
      options={configure(datas)}
    />
  </div>
);

export default Overview;
