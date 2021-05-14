import React from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';

import { aligns, orientations } from './maps';
import orientationPrefix from './orientationPrefix';

function StackItems({ classes, children, orientation }) {
  if (!children) {
    return null;
  }
  const orientationClass = orientations[orientation] + 'item';
  return React.Children.map(children, (child) => {
    if (!child) return child;

    const alignYClass = child.props.alignY
      ? orientationPrefix(orientationClass, aligns[child.props.alignY], 'YItem')
      : '';
    const alignXClass = child.props.alignY
      ? orientationPrefix(orientationClass, aligns[child.props.alignX], 'XItem')
      : '';

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

StackItems.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  orientation: PropTypes.oneOf(Object.keys(orientations)),
};

export default StackItems;
