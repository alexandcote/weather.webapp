import React from "react";
import { shallow } from "enzyme";
import TopBar from "./";

it("renders with station name without crashing", () => {
  const stationName = "My Station";
  const wrapper = shallow(<TopBar stationName={stationName} />);
  expect(wrapper).toHaveText(stationName);
});
