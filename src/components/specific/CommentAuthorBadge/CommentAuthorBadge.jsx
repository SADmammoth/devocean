import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { Link } from 'umi';

import formatName from '../../../helpers/functions/formatName';
import Avatar from '../../generic/Avatar';
import LiveRelativeDate from '../../generic/LiveRelativeDate';
import Text from '../../generic/Text';
import BlockDescriptionLayout from '../../generic/layouts/BlockDescriptionLayout';

import styles from './CommentAuthorBadge.styles';

const useStyles = createUseStyles(styles);

function CommentAuthorBadge({ id, image, author, time }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Link to={`/teammates/${id}`}>
      <BlockDescriptionLayout>
        <BlockDescriptionLayout.Block>
          <Avatar image={image} displayName={formatName(author || {})} />
        </BlockDescriptionLayout.Block>
        <BlockDescriptionLayout.Description>
          <Text type="small" bold>
            {formatName(author || {})}
          </Text>
          <LiveRelativeDate type="small" date={time} />
        </BlockDescriptionLayout.Description>
      </BlockDescriptionLayout>
    </Link>
  );
}

CommentAuthorBadge.propTypes = {};

export default CommentAuthorBadge;
