import React from "react";
import { shallow } from "enzyme";
import { Rect } from "components/shapes/Rect";
let wrapped = shallow(<Rect />);

describe("Rect", () => {
  it("should render the Rect Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
