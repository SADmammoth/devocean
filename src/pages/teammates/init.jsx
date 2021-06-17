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
  const userData = useRecoilValueLoadable(userDataState);
  const initialValues = useRecoilValueLoadable(
    teammateProfilesState_getById(userData?.contents?.id),
  );
  const patchTeammate = useSetRecoilState(
    teammateProfilesState_update(userData?.contents?.id),
  );

  const [hideWorkHours, setHideWorkHours] = useState(true);

  const subteamsOptions = useRecoilValue(subteamsState);
  const tagsOptions = useRecoilValue(tagsState);
  if (userData?.invited === false) return <Redirect to="/error/404" />;
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
          await patchTeammate({ ...data, isOnInvite: true });
          serverStateSync.handSync['userState_data']();
        }}
      />
    </StateMonade>
  );
}

InitProfilePage.propTypes = {};

InitProfilePage.wrappers = ['@/wrappers/features/manageTeammates'];

InitProfilePage.title = 'teammates.init.title';

export default InitProfilePage;
