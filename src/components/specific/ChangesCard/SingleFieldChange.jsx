import React from 'react';

import PropTypes from 'prop-types';

import PanelCard from '../../generic/PanelCard';
import Text from '../../generic/Text';
import StackLayout from '../../generic/layouts/StackLayout';
import CommentAuthorBadge from '../CommentAuthorBadge/CommentAuthorBadge';
import FieldChange from './FieldChange';

function SingleFieldChange({ text, from, to, author, time }) {
  return (
    <PanelCard orientation="vertical" gap="5px">
      <CommentAuthorBadge author={author} time={time} />
      <StackLayout alignY="center">
        <FieldChange from={from} to={to} />
      </StackLayout>
      <StackLayout orientation="vertical" gap="0">
        <Text type="common" bold>
          Commented
        </Text>
        <Text type="common">{text}</Text>
      </StackLayout>
    </PanelCard>
  );
}

SingleFieldChange.propTypes = {};

export default SingleFieldChange;
