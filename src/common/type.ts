import React from "react";
import { SHAPE_TYPE } from "utils/shape";

export type ShapeComponentType<P> =
  | (React.FunctionComponent<P> & {
      ShapeType: SHAPE_TYPE;
    })
  | (typeof React.Component & {
      ShapeType: SHAPE_TYPE;
    });
