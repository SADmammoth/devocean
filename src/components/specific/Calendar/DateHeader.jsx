import React from 'react';

import PropTypes from 'prop-types';

import Text from '../../generic/Text';

function DateHeader({ date }) {
  return (
    <Text type="common" bold>
      {date.toDateString()}
    </Text>
  );
}

DateHeader.propTypes = {};

export default DateHeader;
