import React from 'react';

import PropTypes from 'prop-types';

import PanelCard from '../../generic/PanelCard';
import StackLayout from '../../generic/layouts/StackLayout';
import CommentAuthorBadge from '../CommentAuthorBadge/CommentAuthorBadge';
import FieldChange from './FieldChange';

function FieldsChanges({ fields, author, time }) {
  return (
    <PanelCard orientation="vertical">
      <CommentAuthorBadge author={author} time={time} />
      <StackLayout alignY="center" orientation="vertical">
        {Object.entries(fields || {}).map(([field, [from, to]]) => {
          return <FieldChange field={field} from={from} to={to} />;
        })}
      </StackLayout>
    </PanelCard>
  );
}

FieldsChanges.propTypes = {};

export default FieldsChanges;
