import { intersects } from "utils/shape";

describe("shapeUtils", () => {
  it("should return true when rect and circle are intersect", () => {
    const circleProps = {
      cx: 1,
      cy: 1,
      r: 10,
    };
    const rectProps = {
      x: 1,
      y: 1,
      width: 120,
      heigth: 50,
    };
    const isIntersect = intersects(circleProps, rectProps);
    expect(isIntersect).toEqual(true);
  });

  it("should return true when rect and circle are not intersect", () => {
    const circleProps = {
      cx: 380,
      cy: 150,
      r: 30,
    };
    const rectProps = {
      x: 120,
      y: 120,
      width: 120,
      heigth: 100,
    };
    const isIntersect = intersects(circleProps, rectProps);
    expect(isIntersect).toEqual(false);
  });
});
