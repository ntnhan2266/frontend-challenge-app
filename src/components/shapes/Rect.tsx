import React from "react";
import "components/shapes/rect.css";

export interface RectProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Props extends RectProps {}

export const Rect: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <rect
        className="rect"
        x={props.x}
        y={props.y}
        width={props.width}
        height={props.height}
      />
    </React.Fragment>
  );
};

export default Rect;
