import React from "react";
import { shallow } from "enzyme";
import TileHeader from "./";

it("renders with title without crashing", () => {
  const title = "My Title";
  const wrapper = shallow(<TileHeader title={title} />);
  expect(wrapper).toHaveText(title);
});
