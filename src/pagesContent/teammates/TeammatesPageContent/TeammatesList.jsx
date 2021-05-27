import React from 'react';

import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';

import ItemsList from '../../../components/generic/ItemsList';
import ScrollLayout from '../../../components/generic/layouts/ScrollLayout';
import StackLayout from '../../../components/generic/layouts/StackLayout';
import TeammateProfileCard from '../../../components/specific/TeammateProfileCard/TeammateProfileCard';
import { teammateProfilesState_getBySubteam } from '../../../recoil/states/teammatesProfilesState';

function TeammatesList({ classes, subteamId }) {
  const teammates = useRecoilValue(
    teammateProfilesState_getBySubteam(subteamId),
  );

  const ItemsContainer = ({ className, children }) => (
    <ScrollLayout
      className={className}
      orientation="horizontal"
      scrollOrientation="vertical"
      gap="10px"
      alignY="start"
      alignX="start"
      blockSnapType="start">
      {children}
    </ScrollLayout>
  );

  return (
    <ItemsList
      className={classes.items}
      as={ItemsContainer}
      items={teammates}
      renderItem={(teammate) => (
        <TeammateProfileCard className={classes.card} {...teammate} />
      )}
    />
  );
}

TeammatesList.propTypes = {};

export default TeammatesList;
