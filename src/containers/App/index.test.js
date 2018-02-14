import "amcharts3/amcharts/amcharts";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/themes/light";

import React from "react";
import { shallow } from "enzyme";

import { App } from "./";
import TopBar from "components/TopBar";
import Dashboard from "components/Dashboard";

it("renders loading without crashing", () => {
  const props = {
    loading: true,
    error: false,
    station: undefined
  };
  const content = <h1>Loading...</h1>;
  const wrapper = shallow(<App {...props} />);
  expect(wrapper).toContainReact(content);
});

it("renders error without crashing", () => {
  const props = {
    loading: false,
    error: true,
    station: undefined
  };
  const content = <h1>Error occurred</h1>;
  const wrapper = shallow(<App {...props} />);
  expect(wrapper).toContainReact(content);
});

it("renders without crashing", () => {
  const props = {
    loading: false,
    error: false,
    station: {
      name: "My Station",
      current: {
        inTemperature: 1,
        outTemperature: 2,
        inHumidity: 3,
        outHumidity: 4,
        rainRate: 5,
        tenMinWindSpeed: 6,
        windDirection: 7,
        windSpeed: 8
      },
      datas: [
        {
          time: "time",
          outTemperature: 9
        }
      ]
    }
  };
  const content = <h1>Error occurred</h1>;
  const wrapper = shallow(<App {...props} />);
  expect(wrapper).toContainReact(<TopBar stationName={props.station.name} />);
  expect(wrapper).toContainReact(<Dashboard station={props.station} />);
});
