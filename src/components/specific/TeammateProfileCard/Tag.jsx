import React, { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';

import Text from '../../generic/Text';

function Tag({ classes, tags, children }) {
  const tag = useRef(null);

  const [width, setWidth] = useState('100px');

  useEffect(() => {
    if (!tag.current) return;
    const { width } = tag.current.getBoundingClientRect();

    setWidth(parseInt(width) + 10 + 'px');
  }, [tag.current]);

  if (!tags || !tags.length) return children;
  return (
    <div className={classes.tag}>
      <Text ref={tag} className={classes.tagName} type="hint">
        {tags[0].name}
      </Text>
      <div className={classes.border} style={{ '--width': width }}>
        {children}
      </div>
    </div>
  );
}

Tag.propTypes = {};

export default Tag;
