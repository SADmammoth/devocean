import React, { useState } from 'react';

import PropTypes from 'prop-types';
import {
  useRecoilState,
  useRecoilValue,
  useRecoilValueLoadable,
  useSetRecoilState,
} from 'recoil';
import { Redirect, useHistory } from 'umi';

import StateMonade from '../../helpers/components/StateMonade';
import InitTeammateProfilePageContent from '../../pagesContent/teammates/InitTeammateProfilePageContent';
import serverStateSync from '../../recoil/helpers/effects/serverStateSync';
import subteamsState from '../../recoil/states/subteamsState';
import tagsState from '../../recoil/states/tagsState';
import {
  teammateProfilesState_getById,
  teammateProfilesState_update,
} from '../../recoil/states/teammatesProfilesState';
import userState, { userDataState } from '../../recoil/states/userState';

function InitProfilePage() {
  const userData = useRecoilValue(userDataState);

  const history = useHistory();
  const initialValues = useRecoilValueLoadable(
    teammateProfilesState_getById(userData?.teammateId),
  );
  const patchTeammate = useSetRecoilState(
    teammateProfilesState_update(userData?.teammateId),
  );

  const [hideWorkHours, setHideWorkHours] = useState(true);

  const subteamsOptions = useRecoilValue(subteamsState);
  const tagsOptions = useRecoilValue(tagsState);
  if (userData?.invited === false) return <Redirect to="/" />;
  return (
    <StateMonade
      state={initialValues.state}
      onError={() => {
        return initialValues.contents;
      }}>
      <InitTeammateProfilePageContent
        initialValues={{
          hideWorkHours,
          setHideWorkHours,
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
          await patchTeammate({ ...data, invited: false, isOnInvite: true });
          console.log(serverStateSync.handSync);
          Object.entries(serverStateSync.handSync).find(
            ([key, func]) => !key.startsWith('userState_data') || func(),
          );
          history.push('/');
        }}
      />
    </StateMonade>
  );
}

InitProfilePage.propTypes = {};

InitProfilePage.wrappers = ['@/wrappers/features/manageTeammates'];

InitProfilePage.title = 'teammates.init.title';

export default InitProfilePage;
