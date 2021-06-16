import React from 'react';

import _ from 'lodash';
import PropTypes from 'prop-types';

import Text from '../../../components/generic/Text';
import ScrollLayout from '../../../components/generic/layouts/ScrollLayout';
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
    <ScrollLayout
      scrollOrientation="vertical"
      orientation="vertical"
      gap="10px">
      {Object.entries(customFields)
        .filter(([name, { value }]) => !!value)
        .map(renderCustomField)}
    </ScrollLayout>
  );
}

CustomFields.propTypes = {};

export default CustomFields;
