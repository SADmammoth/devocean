import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import Text from '../../generic/Text';
import TitledBorder from '../../generic/TitledBorder/TitledBorder';

function Tag({ classes, tag, children, index }) {
  if (!tag) return children;
  return (
    <TitledBorder animated index={index} className={classes.tag} title={tag}>
      {children}
    </TitledBorder>
  );
}

Tag.propTypes = {};

export default Tag;
