import React from "react";
import { shallow } from "enzyme";
import { Circle } from "components/shapes/Circle";
let wrapped = shallow(<Circle />);

describe("Circle", () => {
  it("should render the Circle Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
