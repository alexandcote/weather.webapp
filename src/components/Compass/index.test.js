import React from "react";
import { shallow } from "enzyme";
import Compass, { directionName } from "./";

it("renders without crashing", () => {
  const wrapper = shallow(<Compass direction={0} />);
});

it("return the correct direction name", () => {
  const direction = 180;
  expect(directionName(direction)).toEqual("S");
});

it("renders the correct direction", () => {
  const direction = 180;
  const directionName = (
    <div className="Compass__labels">
      <span>S</span>
    </div>
  );
  const wrapper = shallow(<Compass direction={direction} />);
  expect(wrapper.contains(directionName)).toEqual(true);
});
