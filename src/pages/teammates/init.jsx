import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';

import StateMonade from '../../helpers/components/StateMonade';
import InitTeammateProfilePageContent from '../../pagesContent/InitTeammateProfilePageContent';
import subteamsState from '../../recoil/states/subteamsState';
import tagsState from '../../recoil/states/tagsState';
import {
  teammateProfilesState_getById,
  teammateProfilesState_update,
} from '../../recoil/states/teammatesProfilesState';
import userState, { userDataState } from '../../recoil/states/userState';

function InitProfile() {
  const userData = useRecoilValue(userDataState);
  const initialValues = useRecoilValueLoadable(
    teammateProfilesState_getById(userData?.id),
  );
  const patchTeammate = useSetRecoilState(
    teammateProfilesState_update(userData?.id),
  );
  const [userToken, setUserToken] = useRecoilState(userState);

  const subteamsOptions = useRecoilValue(subteamsState);
  const tagsOptions = useRecoilValue(tagsState);
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
          tags: initialValues.contents.tags
            ? initialValues.contents.tags.map(({ id }) => id)
            : [],
          subteams: initialValues.contents.subteams
            ? initialValues.contents.subteams.map(({ id }) => id)
            : [],
          tagsValueOptions: tagsOptions.map(({ name, id }) => ({
            label: name,
            value: id,
          })),
          subteamsValueOptions: subteamsOptions.map(({ name, id }) => ({
            label: name,
            value: id,
          })),
        }}
        onSubmit={async (data) => {
          await patchTeammate({ ...data, isOnInvite: true });
          setUserToken(userToken);
        }}
      />
    </StateMonade>
  );
}

InitProfile.propTypes = {};

InitProfile.wrappers = ['@/wrappers/features/manageTeammates'];

export default InitProfile;
