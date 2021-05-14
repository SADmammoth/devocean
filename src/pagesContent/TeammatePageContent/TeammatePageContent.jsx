import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable } from 'recoil';

import Avatar from '../../components/generic/Avatar';
import Sidebar from '../../components/generic/Sidebar';
import Text from '../../components/generic/Text';
import BlockDescriptionLayout from '../../components/generic/layouts/BlockDescriptionLayout';
import GridLayout from '../../components/generic/layouts/GridLayout';
import StackLayout from '../../components/generic/layouts/StackLayout';
import formatName from '../../helpers/formatName';
import { teammatesState_getWithTasks } from '../../recoil/states/teammatesState';

import styles from './TeammatePageContent.styles';

const useStyles = createUseStyles(styles);

function TeammatePageContent({ initialValues }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { avatar, name, lastName, id, referAs, aboutYourself } = initialValues;

  const tasks = useRecoilValueLoadable(teammatesState_getWithTasks);

  return (
    <GridLayout className={classes.content}>
      <Sidebar column={3}></Sidebar>
      <StackLayout
        column={7}
        className={classes.marginTop}
        orientation="vertical"
        gap="30px">
        <BlockDescriptionLayout>
          <BlockDescriptionLayout.Block>
            <Avatar
              image={avatar}
              displayName={formatName({ name, lastName })}
              size="85px"
            />
          </BlockDescriptionLayout.Block>
          <BlockDescriptionLayout.Description alignY="center">
            <Text type="h1" className={classes.name}>
              {name} {lastName}
            </Text>
            <Text type="common">{referAs}</Text>
          </BlockDescriptionLayout.Description>
        </BlockDescriptionLayout>
        <StackLayout orientation="vertical" gap="0">
          <h2>
            <Text type="h2" as="span" italic>
              {name}
            </Text>{' '}
            <Text type="h2" as="span">
              in few words
            </Text>
          </h2>
          <Text type="common">{aboutYourself}</Text>
        </StackLayout>
      </StackLayout>
    </GridLayout>
  );
}

TeammatePageContent.propTypes = {};

export default TeammatePageContent;
