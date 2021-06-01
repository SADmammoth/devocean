import React from 'react';

import PropTypes from 'prop-types';

import Text from '../../generic/Text';

function TaskHeader({ classes, title }) {
  return (
    <header className={classes.header}>
      <Text type="small" bold className={classes.title} lines={2} hyphenated>
        {title}
      </Text>
    </header>
  );
}

TaskHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};

export default TaskHeader;
