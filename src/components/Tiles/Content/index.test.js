import React from "react";
import { shallow } from "enzyme";
import TileContent from "./";

it("renders with children without crashing", () => {
  const content = <div>My content</div>;
  const wrapper = shallow(<TileContent>{content}</TileContent>);
  expect(wrapper).toContainReact(content);
});

it("renders full content without crashing", () => {
  const wrapper = shallow(<TileContent full={true} />);
  expect(wrapper).toHaveClassName("TileContent--full");
});

it("renders no full content without crashing", () => {
  const wrapper = shallow(<TileContent full={false} />);
  expect(wrapper).not.toHaveClassName("TileContent--full");
});

it("renders default content without crashing", () => {
  const wrapper = shallow(<TileContent />);
  expect(wrapper).not.toHaveClassName("TileContent--full");
});
