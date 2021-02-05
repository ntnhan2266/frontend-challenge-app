import React from "react";
import { mount, shallow } from "enzyme";
import withDragDrop from "components/hocs/withDragDrop";
import Circle from "components/shapes/Circle";

describe("withDragDrop", () => {
  it("should render HOC component correctly", () => {
    const WithDragDropComponent = withDragDrop(Circle);
    const wrapper = shallow(<WithDragDropComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
