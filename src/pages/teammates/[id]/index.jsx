import React from 'react';

import PropTypes from 'prop-types';
import { useRecoilValueLoadable } from 'recoil';

import StateMonade from '../../../helpers/StateMonade';
import TeammatePageContent from '../../../pagesContent/TeammatePageContent/TeammatePageContent';
import { teammateProfilesState_getById } from '../../../recoil/states/teammatesProfiles';

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

export default TeammatePage;
