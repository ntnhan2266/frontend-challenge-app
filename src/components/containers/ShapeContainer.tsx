import React from "react";

import Rect, { RectProps } from "components/shapes/Rect";
import Circle, { CircleProps } from "components/shapes/Circle";
import { intersects, SHAPE_TYPE } from "utils/shape";

export interface ShapeContainerState {
  rectProps: RectProps;
  circleProps: CircleProps;
  isIntersected: boolean;
}

class ShapeContainer extends React.Component<any, ShapeContainerState> {
  constructor(props: any) {
    super(props);
    this.state = {
      rectProps: {
        x: 120,
        y: 120,
        width: 120,
        height: 100,
      },
      circleProps: {
        cx: 380,
        cy: 150,
        r: 30,
      },
      isIntersected: false,
    };
  }

  onDragHandler = (shapeType: SHAPE_TYPE, x: number, y: number) => {
    let newState = { ...this.state };
    switch (shapeType) {
      case SHAPE_TYPE.RECT: {
        newState = { ...newState, rectProps: { ...newState.rectProps, x, y } };
        break;
      }
      case SHAPE_TYPE.CIRCLE: {
        newState = {
          ...newState,
          circleProps: { ...newState.circleProps, cx: x, cy: y },
        };
        break;
      }
      default:
        break;
    }
    const isIntersected = intersects(newState.circleProps, newState.rectProps);
    newState = { ...newState, isIntersected };
    this.setState(newState);
  };

  render() {
    return (
      <svg width={"100vw"} height={"100vh"}>
        <Rect {...this.state.rectProps} />
        <Circle
          {...this.state.circleProps}
          onDrag={this.onDragHandler}
          isIntersected={this.state.isIntersected}
        />
      </svg>
    );
  }
}

export default ShapeContainer;
