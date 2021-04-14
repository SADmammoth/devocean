import React from "react";
import classNames from "classnames";
import { aligns, orientations } from "./maps";
import orientationPrefix from "./orientationPrefix";

export default function StackItems({ classes, children, orientation }) {
  const orientationClass = orientations[orientation];
  return React.Children.map(children, (child) => {
    if (!child) return child;

    const alignYClass = child.props.alignY
      ? orientationPrefix(orientationClass, aligns[child.props.alignY], "YItem")
      : "";
    const alignXClass = child.props.alignY
      ? orientationPrefix(orientationClass, aligns[child.props.alignX], "XItem")
      : "";

    return {
      ...child,
      props: {
        ...child.props,
        className: classNames([
          child.props.className,
          classes[orientationClass],
          classes[alignYClass],
          classes[alignXClass],
        ]),
      },
    };
  });
}
