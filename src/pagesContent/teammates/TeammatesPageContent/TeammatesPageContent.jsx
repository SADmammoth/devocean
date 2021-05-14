import React from 'react';

import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import { useRecoilValueLoadable } from 'recoil';

import Sidebar from '../../../components/generic/Sidebar';
import GridLayout from '../../../components/generic/layouts/GridLayout';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import TeammateProfileCard from '../../../components/specific/TeammateProfileCard/TeammateProfileCard';
import StateMonade from '../../../helpers/components/StateMonade';
import teammateProfilesState from '../../../recoil/states/teammatesProfilesState';

import styles from './TeammatesPageContent.styles';

const useStyles = createUseStyles(styles);

function TeammatesPageContent(props) {
  const theme = useTheme();
  const classes = useStyles(theme);

  const profiles = useRecoilValueLoadable(teammateProfilesState);

  return (
    <GridLayout className={classes.content}>
      <Sidebar column={3}></Sidebar>
      <StackLayout column={7} className={classes.marginTop}>
        <StackLayout gap="10px" alignY="start" alignX="start">
          <StateMonade state={profiles.state}>
            {profiles.contents.map((profile) => (
              <TeammateProfileCard {...profile} />
            ))}
          </StateMonade>
        </StackLayout>
      </StackLayout>
    </GridLayout>
  );
}

TeammatesPageContent.propTypes = {};

export default TeammatesPageContent;
