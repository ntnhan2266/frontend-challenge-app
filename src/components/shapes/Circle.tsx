import React, { RefObject } from "react";
import "components/shapes/circle.css";
import { SHAPE_TYPE } from "utils/shape";
import withDragDrop from "components/hocs/withDragDrop";
import { ShapeComponentType } from "common/type";

export interface CircleProps {
  cx: number;
  cy: number;
  r: number;
}

interface Props extends CircleProps {
  onDrag: Function;
  isIntersected: boolean;
  domNodeRef: RefObject<any>;
}

export const Circle: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <circle
        className={props.isIntersected ? "fill-red" : "fill-green"}
        ref={props.domNodeRef}
        cx={props.cx}
        cy={props.cy}
        r={props.r}
      />
    </React.Fragment>
  );
};

const CircleComponent: ShapeComponentType<any> = Object.assign(Circle, {
  ShapeType: SHAPE_TYPE.CIRCLE,
});
export default withDragDrop(CircleComponent);
