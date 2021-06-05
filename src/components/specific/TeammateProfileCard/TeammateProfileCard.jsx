import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';

import formatName from '../../../helpers/functions/formatName';
import useLocale from '../../../helpers/hooks/useLocale';
import Avatar from '../../generic/Avatar';
import Card from '../../generic/Card';
import InteractiveCard from '../../generic/InteractiveCard';
import Marked from '../../generic/Marked';
import Text from '../../generic/Text';
import BlockDescriptionLayout from '../../generic/layouts/BlockDescriptionLayout';
import StackLayout from '../../generic/layouts/StackLayout';
import Tag from './Tag';

import styles from './TeammateProfileCard.styles';

const useStyles = createUseStyles(styles);

function TeammateProfileCard({
  id,
  name,
  lastName,
  shortName,
  avatar,
  status,
  actualStatus,
  tags,
  index,
}) {
  const theme = useTheme();
  const classes = useStyles(theme);
  const locale = useLocale();

  return (
    <Tag classes={classes} tags={tags} index={index}>
      <InteractiveCard
        index={index}
        link={`/teammates/${id}`}
        className={classes.teammateProfileCard}>
        <StackLayout alignX="spaceBetween">
          <BlockDescriptionLayout>
            <BlockDescriptionLayout.Block>
              <Avatar
                image={avatar}
                displayName={formatName({ name, lastName })}
                size="50px"
              />
            </BlockDescriptionLayout.Block>
            <BlockDescriptionLayout.Description className={classes.description}>
              <Text type="common" bold>
                {name} {lastName}
              </Text>
              <Text type="small">{locale('aka', { shortName })}</Text>
            </BlockDescriptionLayout.Description>
          </BlockDescriptionLayout>
          <StackLayout
            orientation="vertical"
            alignX="end"
            alignY="spaceBetween">
            {Marked(
              actualStatus === 'online' ? 'active' : 'unactive',
              <Text type="hint" alignY="start">
                {actualStatus}
              </Text>,
            )}
            {!status ||
              Marked(
                status === 'working' ? 'active' : 'unactive',
                <Text type="hint" alignY="end">
                  {status}
                </Text>,
              )}
          </StackLayout>
        </StackLayout>
      </InteractiveCard>
    </Tag>
  );
}

TeammateProfileCard.propTypes = {};

export default TeammateProfileCard;
