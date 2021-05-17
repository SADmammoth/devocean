import React from 'react';

import _ from 'lodash';
import PropTypes from 'prop-types';

import Text from '../../../components/generic/Text';
import StackLayout from '../../../components/generic/layouts/StackLayout';

function CustomFields({ classes, customFields }) {
  const renderCustomField = ([name, { label, value }]) => {
    return (
      <StackLayout orientation="vertical" gap="5px">
        <Text type="h2" className={classes.clearHeading}>
          {label}
        </Text>
        <Text type="common">{value}</Text>
      </StackLayout>
    );
  };
  return (
    <StackLayout orientation="vertical" gap="10px">
      {Object.entries(customFields).map(renderCustomField)}
    </StackLayout>
  );
}

CustomFields.propTypes = {};

export default CustomFields;
