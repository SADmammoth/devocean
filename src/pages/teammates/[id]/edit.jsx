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
import subteamsState from '../../../recoil/states/subteamsState';
import tagsState from '../../../recoil/states/tagsState';
import {
  teammateProfilesState_getById,
  teammateProfilesState_update,
} from '../../../recoil/states/teammatesProfilesState';
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
            value: name,
          })),
          subteamsValueOptions: subteamsOptions.map(({ name, id }) => ({
            label: name,
            value: name,
          })),
        }}
        onSubmit={async (data) => {
          await patchTeammate({ ...data });
          setUserToken(userToken);
        }}
      />
    </StateMonade>
  );
}

EditProfile.propTypes = {};

EditProfile.wrappers = ['@/wrappers/features/manageTeammates'];

export default EditProfile;
