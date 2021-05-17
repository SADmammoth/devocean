import React from 'react';

import _ from 'lodash';
import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';

import Text from '../../generic/Text';
import StackLayout from '../../generic/layouts/StackLayout';

function FieldChange({ field, from, to }) {
  return (
    <StackLayout orientation="vertical">
      {!field || (
        <Text type="common" bold>
          {_.capitalize(field)}
        </Text>
      )}
      <StackLayout>
        <Text type="common" italic>
          {from}
        </Text>
        <div>
          <FaChevronRight />
        </div>
        <Text type="common" italic>
          {to}
        </Text>
      </StackLayout>
    </StackLayout>
  );
}

FieldChange.propTypes = {};

export default FieldChange;
