import React from 'react';

import PropTypes from 'prop-types';

import Text from '../../generic/Text';

function HoursHeader({ date }) {
  return <Text type="common">{`${date.getHours()}:00`}</Text>;
}

HoursHeader.propTypes = {};

export default HoursHeader;
