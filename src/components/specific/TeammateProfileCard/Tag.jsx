import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import Text from '../../generic/Text';
import TitledBorder from '../../generic/TitledBorder/TitledBorder';

function Tag({ classes, tags, children }) {
  if (!tags || !tags.length) return children;
  return <TitledBorder title={tags[0].name}>{children}</TitledBorder>;
}

Tag.propTypes = {};

export default Tag;
