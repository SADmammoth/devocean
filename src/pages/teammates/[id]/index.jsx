import React from 'react';

import PropTypes from 'prop-types';
import { useRecoilValueLoadable } from 'recoil';

import StateMonade from '../../../helpers/components/StateMonade';
import TeammatePageContent from '../../../pagesContent/teammates/TeammatePageContent/TeammatePageContent';
import { teammateProfilesState_getById } from '../../../recoil/states/teammatesProfilesState';

function TeammatePage({
  match: {
    params: { id },
  },
}) {
  const profile = useRecoilValueLoadable(teammateProfilesState_getById(id));

  return (
    <StateMonade state={profile.state}>
      <TeammatePageContent initialValues={profile.contents} />
    </StateMonade>
  );
}

TeammatePage.propTypes = {};

TeammatePage.wrappers = ['@/wrappers/features/viewTeammates'];

export default TeammatePage;
