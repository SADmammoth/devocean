import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import formatName from '../../../helpers/formatName';
import Avatar from '../../generic/Avatar';
import InteractiveCard from '../../generic/InteractiveCard';
import Text from '../../generic/Text';
import BlockDescriptionLayout from '../../generic/layouts/BlockDescriptionLayout';
import StackLayout from '../../generic/layouts/StackLayout';

import styles from './TeammateProfileCard.styles';

const useStyles = createUseStyles(styles);

function TeammateProfileCard({
  id,
  name,
  lastName,
  referAs,
  avatar,
  status,
  actualStatus,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <InteractiveCard
      link={`/teammates/${id}`}
      className={classes.teammateProfileCard}>
      <StackLayout alignX="spaceBetween">
        <BlockDescriptionLayout>
          <BlockDescriptionLayout.Block>
            <Avatar
              image={avatar}
              displayName={formatName({ name, lastName })}
              size="40px"
            />
          </BlockDescriptionLayout.Block>
          <BlockDescriptionLayout.Description>
            <Text type="common" bold>
              {name} {lastName}
            </Text>
            <Text type="small">{referAs}</Text>
          </BlockDescriptionLayout.Description>
        </BlockDescriptionLayout>
        <StackLayout orientation="vertical" alignX="end" alignY="spaceBetween">
          <Text type="hint" alignY="start">
            {actualStatus}
          </Text>
          <Text type="hint" alignY="end">
            {status}
          </Text>
        </StackLayout>
      </StackLayout>
    </InteractiveCard>
  );
}

TeammateProfileCard.propTypes = {};

export default TeammateProfileCard;
