import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';
import { Redirect } from 'umi';

import StateMonade from '../../helpers/components/StateMonade';
import InitTeammateProfilePageContent from '../../pagesContent/InitTeammateProfilePageContent';
import serverStateSync from '../../recoil/helpers/effects/serverStateSync';
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

  const subteamsOptions = useRecoilValue(subteamsState);
  const tagsOptions = useRecoilValue(tagsState);
  if (userData?.invited === false) return <Redirect to="/404" />;
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
            ? initialValues.contents.tags.map(({ name }) => name)
            : [],
          subteams: initialValues.contents.subteams
            ? initialValues.contents.subteams.map(({ name }) => name)
            : [],
          tagsValueOptions: tagsOptions.map(({ name, id }) => ({
            label: name,
            value: name,
          })),
          subteamsValueOptions: subteamsOptions.map(({ name, id }) => ({
            label: name,
            value: name,
          })),
        }}
        onSubmit={async (data) => {
          await patchTeammate({ ...data, isOnInvite: true });
          serverStateSync.handSync['userState_data']();
        }}
      />
    </StateMonade>
  );
}

InitProfile.propTypes = {};

InitProfile.wrappers = ['@/wrappers/features/manageTeammates'];

export default InitProfile;
