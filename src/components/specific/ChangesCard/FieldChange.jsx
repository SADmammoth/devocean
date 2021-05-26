import React from 'react';

import _ from 'lodash';
import PropTypes from 'prop-types';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa';

import Text from '../../generic/Text';
import StackLayout from '../../generic/layouts/StackLayout';

function FieldChange({ classes, field, from, to }) {
  return (
    <StackLayout orientation="vertical">
      {!field || (
        <Text type="common" bold>
          {_.capitalize(_.startCase(field).toLowerCase())}
        </Text>
      )}
      <StackLayout alignY="center" className={classes.change}>
        <Text className={classes.from} type="common" italic>
          {from}
        </Text>
        <div className={classes.changeArrow}>
          <FaArrowRight />
        </div>
        <Text className={classes.to} type="common" italic>
          {to}
        </Text>
      </StackLayout>
    </StackLayout>
  );
}

FieldChange.propTypes = {};

export default FieldChange;
