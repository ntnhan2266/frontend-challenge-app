import React from "react";
import { shallow } from "enzyme";
import ShapeContainer from "components/containers/ShapeContainer";
let wrapped = shallow(<ShapeContainer />);

describe("ShapeContainer", () => {
  it("should render the ShapeContainer Component correctly", () => {
    expect(wrapped).toMatchSnapshot();
  });
});
