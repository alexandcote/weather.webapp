import React from "react";
import { shallow } from "enzyme";
import TileContainer from "./";

it("renders whit children without crashing", () => {
  const content = <div>content</div>;
  const wrapper = shallow(<TileContainer>{content}</TileContainer>);
  expect(wrapper).toContainReact(content);
});
