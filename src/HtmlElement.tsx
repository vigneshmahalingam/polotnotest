import React from "react";
import { Html } from "react-konva-utils";
import { observer } from "mobx-react-lite";

// import Polotno API methods
import { unstable_registerShapeComponent } from "polotno/config";
import { unstable_registerToolbarComponent } from "polotno/config";
import { unstable_registerShapeModel } from "polotno/config";
import { unstable_registerTransformerAttrs } from "polotno/config";
import { Portal } from "react-konva-utils";
import { Stage, Layer, Group, Rect, Transformer } from "react-konva";

// define our model
// we need to provide all default values
unstable_registerShapeModel(
  // define properties
  {
    type: "html",
  }
);

// now we need to define how elements looks on canvas
// @ts-ignore:next-line
export const HtmlElement = observer(({ element, store }) => {
  const transformFunc = (attrs: any): any => {
    const { x, y, scaleX, scaleY, rotation } = attrs;

    // Perform custom transformations
    const newX = x; // Example: Offset X coordinate by 10 pixels
    const newY = y; // Example: Offset Y coordinate by 10 pixels
    const newScaleX = scaleX; // Example: Scale X by 1.5
    const newScaleY = scaleY; // Example: Scale Y by 1.5
    const newRotation = rotation + 0; // Example: Rotate by 15 degrees

    // Return the transformed attributes
    return {
      ...attrs,
      x: newX,
      y: newY,
      scaleX: newScaleX,
      scaleY: newScaleY,
      rotation: newRotation,
    };
  };

  // VERY IMPORTANT note!
  // element.x and element.y - must define top-left corner of the shape
  // so all position attributes are consistent across all elements
  return (
    <React.Fragment>
      <Group
        draggable
        onDragStart={() => {
          // Optionally, add logic for drag start
        }}
        onDragMove={(e) => {
          const node = e.currentTarget;
          const { x, y } = node.attrs;
          element.set({ x, y });
        }}
        onDragEnd={() => {
          // Optionally, add logic for drag end
        }}
      >
        <Html
          divProps={{
            style: {
              position: "absolute",
              top: 10,
              left: 10,
            },
          }}
          transform={true}
          transformFunc={transformFunc}
        >
          <iframe
            src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=en&size=&timezone=Europe%2FParis"
            width="100%"
            height="150"
            frameBorder="0"
            seamless
          ></iframe>
        </Html>
      </Group>
    </React.Fragment>
  );
});

// now we can register canvas component
// @ts-ignore:next-line
unstable_registerShapeComponent("html", HtmlElement);
