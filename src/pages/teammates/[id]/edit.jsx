import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';

import StateMonade from '../../../helpers/components/StateMonade';
import EditTeammateProfilePageContent from '../../../pagesContent/teammates/EditTeammateProfilePageContent';
import subteamsState from '../../../recoil/states/subteamsState';
import tagsState from '../../../recoil/states/tagsState';
import {
  teammateProfilesState_getById,
  teammateProfilesState_update,
} from '../../../recoil/states/teammatesProfilesState';
import userState from '../../../recoil/states/userState';

function EditProfilePage({
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

  const [hideWorkHours, setHideWorkHours] = useState(true);

  return (
    <StateMonade
      state={initialValues.state}
      onError={() => {
        return initialValues.contents;
      }}>
      <EditTeammateProfilePageContent
        initialValues={{
          hideWorkHours,
          setHideWorkHours,
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
          history.push('/teammates');
        }}
      />
    </StateMonade>
  );
}

EditProfilePage.propTypes = {};

EditProfilePage.wrappers = ['@/wrappers/features/manageTeammates'];

EditProfilePage.title = 'teammates.edit.title';

export default EditProfilePage;
