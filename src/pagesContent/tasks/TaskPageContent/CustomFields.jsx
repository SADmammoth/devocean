import React from 'react';

import _ from 'lodash';
import PropTypes from 'prop-types';

import Text from '../../../components/generic/Text';
import StackLayout from '../../../components/generic/layouts/StackLayout';

function CustomFields({ customFields }) {
  const renderCustomField = ([name, value]) => {
    return (
      <StackLayout orientation="vertical">
        <Text type="h2">{_.upperFirst(_.lowerCase(name))}</Text>
        <Text type="common">{value}</Text>
      </StackLayout>
    );
  };
  return (
    <StackLayout orientation="vertical">
      {Object.entries(customFields).map(renderCustomField)}
    </StackLayout>
  );
}

CustomFields.propTypes = {};

export default CustomFields;
