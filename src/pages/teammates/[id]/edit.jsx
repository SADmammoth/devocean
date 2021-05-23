import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';

import StateMonade from '../../../helpers/components/StateMonade';
import InitTeammateProfilePageContent from '../../../pagesContent/InitTeammateProfilePageContent';
import {
  teammateProfilesState_getById,
  teammateProfilesState_update,
} from '../../../recoil/states/teammatesProfilesState';
import { teammatesState_update } from '../../../recoil/states/teammatesState';
import userState from '../../../recoil/states/userState';

function EditProfile({
  match: {
    params: { id },
  },
}) {
  const initialValues = useRecoilValueLoadable(
    teammateProfilesState_getById(id),
  );
  const patchTeammate = useSetRecoilState(teammateProfilesState_update(id));
  const [userToken, setUserToken] = useRecoilState(userState);

  return (
    <StateMonade
      state={initialValues.state}
      onError={() => {
        return initialValues.contents;
      }}>
      <InitTeammateProfilePageContent
        edit
        initialValues={{
          hideLogin: true,
          hideWorkHours: true,
          hidePassword: true,
          hideWorkHoursSelect: true,
          hideJoinedAt: true,
          hideEmail: true,
          ...initialValues.contents,
        }}
        onSubmit={async (data) => {
          await patchTeammate({ ...data, isOnInvite: true });
          setUserToken(userToken);
        }}
      />
    </StateMonade>
  );
}

EditProfile.propTypes = {};

EditProfile.wrappers = ['@/wrappers/features/manageTeammates'];

export default EditProfile;
