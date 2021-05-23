import React from 'react';

import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';

import TeammateProfileCard from '../../../components/specific/TeammateProfileCard/TeammateProfileCard';
import { teammateProfilesState_getBySubteam } from '../../../recoil/states/teammatesProfilesState';

function TeammatesList({ subteamId }) {
  const teammates = useRecoilValue(
    teammateProfilesState_getBySubteam(subteamId),
  );

  return teammates.map((teammate) => <TeammateProfileCard {...teammate} />);
}

TeammatesList.propTypes = {};

export default TeammatesList;
