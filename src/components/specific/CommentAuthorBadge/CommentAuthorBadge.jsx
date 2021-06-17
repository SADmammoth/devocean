import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { Link } from 'umi';

import formatName from '../../../helpers/functions/formatName';
import Avatar from '../../generic/Avatar';
import HiddenLink from '../../generic/HiddenLink';
import LiveRelativeDate from '../../generic/LiveRelativeDate';
import Text from '../../generic/Text';
import BlockDescriptionLayout from '../../generic/layouts/BlockDescriptionLayout';

import styles from './CommentAuthorBadge.styles';

const useStyles = createUseStyles(styles);

function CommentAuthorBadge({ className, author, time }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <HiddenLink to={`/teammates/${author?.id}`}>
      <BlockDescriptionLayout className={className}>
        <BlockDescriptionLayout.Block>
          <Avatar
            image={author?.avatar}
            displayName={formatName(author || {})}
            size="50px"
          />
        </BlockDescriptionLayout.Block>
        <BlockDescriptionLayout.Description>
          <Text type="common" bold>
            {formatName(author || { name: 'Former user' })}
          </Text>
          <LiveRelativeDate type="small" date={time} />
        </BlockDescriptionLayout.Description>
      </BlockDescriptionLayout>
    </HiddenLink>
  );
}

CommentAuthorBadge.propTypes = {};

export default CommentAuthorBadge;
