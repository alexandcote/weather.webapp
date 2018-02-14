import React from "react";
import { shallow } from "enzyme";
import Tile from "./";

it("renders whit children without crashing", () => {
  const content = <div>content</div>;
  const wrapper = shallow(<Tile>{content}</Tile>);
  expect(wrapper).toContainReact(content);
});
