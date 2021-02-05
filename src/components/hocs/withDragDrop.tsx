import React, { createRef } from "react";
import * as d3 from "d3";
import { ShapeComponentType } from "common/type";

const withDragDrop = (
  WrappedComponent: ShapeComponentType<any>
): typeof React.Component => {
  return class extends React.Component<any | Readonly<any>, any> {
    node = createRef();

    componentDidMount() {
      this.handleDragDropEvent();
    }

    handleDragDropEvent = () => {
      if (this.node.current) {
        const self = this;
        const handleDrag = d3
          .drag()
          .subject(function () {
            const s = d3.select(this);
            return { x: s.attr("cx"), y: s.attr("cy") };
          })
          .on("drag", function (event, _) {
            const s = d3.select(this);
            s.attr("cx", event.x);
            s.attr("cy", event.y);
            self.props.onDrag(WrappedComponent.ShapeType, event.x, event.y);
          });
        handleDrag(d3.select(self.node.current as Element));
      }
    };

    render() {
      return <WrappedComponent {...this.props} domNodeRef={this.node} />;
    }
  };
};

export default withDragDrop;
