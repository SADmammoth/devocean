import React from 'react';

import PropTypes from 'prop-types';

import Text from '../Text';

function HoursBadge({ hours }) {
  const date = new Date(hours);
  const hoursNumber = date.getHours().toString().padStart(2, '0');
  const minutesNumber = date.getMinutes().toString().padStart(2, '0');
  return (
    <Text type="common" as="time" dateTime={date.toString()}>
      {hoursNumber}:{minutesNumber}
    </Text>
  );
}

HoursBadge.propTypes = {};

export default HoursBadge;
