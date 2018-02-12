// @flow
import React from "react";

import moment from "moment";
import AmCharts from "@amcharts/amcharts3-react";

import { fahrenheitToCelsius } from "utils";

type Props = {
  datas: any
};

const config = {
  type: "serial",
  theme: "light",
  marginRight: 40,
  marginLeft: 60,
  autoMarginOffset: 20,
  mouseWheelZoomEnabled: true,
  valueAxes: [
    {
      id: "v1",
      axisAlpha: 0,
      unit: " ℃",
      position: "left",
      ignoreAxisWidth: true
    }
  ],
  balloon: {
    borderThickness: 1,
    shadowAlpha: 0
  },
  graphs: [
    {
      id: "g1",
      balloon: {
        drop: true,
        adjustBorderColor: false,
        color: "#ffffff"
      },
      bullet: "round",
      bulletBorderAlpha: 1,
      bulletColor: "#FFFFFF",
      bulletSize: 2,
      hideBulletsCount: 50,
      lineThickness: 2,
      title: "red line",
      useLineColorForBulletBorder: true,
      valueField: "value",
      balloonText: "<span style='font-size:13px;'>[[value]]</span>"
    }
  ],
  chartCursor: {
    pan: true,
    valueLineEnabled: true,
    valueLineBalloonEnabled: true,
    cursorAlpha: 1,
    cursorColor: "#258cbb",
    limitToGraph: "g1",
    valueLineAlpha: 0.2,
    valueZoomable: true
  },
  categoryField: "date",
  categoryAxis: {
    parseDates: false,
    dashLength: 1,
    labelRotation: 45,
    minorGridEnabled: true
  }
};

const configure = function(datas) {
  const dataStream = datas.map(d => ({
    date: moment(d.time).format("DD MMM hh:mm"),
    value: fahrenheitToCelsius(d.outTemperature)
  }));
  return { ...config, dataProvider: dataStream.reverse() };
};

const Week = ({ datas }: Props) => (
  <div>
    <AmCharts.React
      style={{ width: "100%", height: "500px" }}
      options={configure(datas)}
    />
  </div>
);

export default Week;
