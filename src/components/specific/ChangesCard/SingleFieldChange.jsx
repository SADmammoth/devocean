import React from 'react';

import PropTypes from 'prop-types';

import Card from '../../generic/Card';
import PanelCard from '../../generic/PanelCard';
import Text from '../../generic/Text';
import StackLayout from '../../generic/layouts/StackLayout';
import CommentAuthorBadge from '../CommentAuthorBadge/CommentAuthorBadge';
import FieldChange from './FieldChange';

function SingleFieldChange({
  classes,
  className,
  text,
  from,
  to,
  author,
  time,
  index,
}) {
  return (
    <Card className={className} index={index}>
      <StackLayout orientation="vertical" gap="10px">
        <CommentAuthorBadge
          className={classes.author}
          author={author}
          time={time}
        />
        <StackLayout alignY="center">
          <FieldChange classes={classes} from={from} to={to} />
        </StackLayout>
        <StackLayout orientation="vertical" gap="5px">
          <Text type="common" bold>
            Commented
          </Text>
          <Text type="common" className={classes.text}>
            {text}
          </Text>
        </StackLayout>
      </StackLayout>
    </Card>
  );
}

SingleFieldChange.propTypes = {};

export default SingleFieldChange;
