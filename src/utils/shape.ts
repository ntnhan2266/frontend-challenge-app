import React from "react";
import { CircleProps } from "components/shapes/Circle";
import { RectProps } from "components/shapes/Rect";

export interface Distance {
  x: number;
  y: number;
}

export enum SHAPE_TYPE {
  RECT = "rect",
  CIRCLE = "circle",
}

export const intersects = (circle: CircleProps, rect: RectProps): boolean => {
  let circleDistance: Distance = { x: 0, y: 0 };
  const rectCenter = {
    x: rect.x + rect.width / 2,
    y: rect.y + rect.height / 2,
  };
  circleDistance.x = Math.abs(circle.cx - rectCenter.x);
  circleDistance.y = Math.abs(circle.cy - rectCenter.y);

  if (circleDistance.x > rect.width / 2 + circle.r) {
    return false;
  }
  if (circleDistance.y > rect.height / 2 + circle.r) {
    return false;
  }

  if (circleDistance.x <= rect.width / 2) {
    return true;
  }
  if (circleDistance.y <= rect.height / 2) {
    return true;
  }

  const cornerDistance_sq =
    (circleDistance.x - rect.width / 2) ^
    (2 + (circleDistance.y - rect.height / 2)) ^
    2;

  return cornerDistance_sq <= (circle.r ^ 2);
};
