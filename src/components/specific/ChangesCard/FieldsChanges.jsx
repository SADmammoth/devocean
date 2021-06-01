import React from 'react';

import PropTypes from 'prop-types';

import Card from '../../generic/Card';
import PanelCard from '../../generic/PanelCard';
import StackLayout from '../../generic/layouts/StackLayout';
import CommentAuthorBadge from '../CommentAuthorBadge/CommentAuthorBadge';
import FieldChange from './FieldChange';

function FieldsChanges({ className, classes, index, fields, author, time }) {
  return (
    <Card className={className} index={index}>
      <StackLayout orientation="vertical">
        <CommentAuthorBadge
          className={classes.author}
          author={author}
          time={time}
        />
        <StackLayout alignY="center" orientation="vertical">
          {Object.entries(fields || {}).map(([field, [from, to]]) => {
            return (
              <FieldChange
                classes={classes}
                field={field}
                from={from}
                to={to}
              />
            );
          })}
        </StackLayout>
      </StackLayout>
    </Card>
  );
}

FieldsChanges.propTypes = {};

export default FieldsChanges;
