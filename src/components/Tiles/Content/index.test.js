import React from "react";
import { shallow } from "enzyme";
import TileContent from "./";

it("renders with children without crashing", () => {
  const content = <div>My content</div>;
  const wrapper = shallow(<TileContent>{content}</TileContent>);
  expect(wrapper).toContainReact(content);
});
