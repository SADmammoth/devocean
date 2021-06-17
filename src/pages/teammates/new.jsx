import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import CreateTeammateProfilePageContent from '../../pagesContent/teammates/CreateTeammateProfilePageContent/CreateTeammateProfilePageContent';
import InitTeammateProfilePageContent from '../../pagesContent/teammates/InitTeammateProfilePageContent';
import subteamsState from '../../recoil/states/subteamsState';
import tagsState from '../../recoil/states/tagsState';
import teammateProfilesState from '../../recoil/states/teammatesProfilesState';

function NewProfilePage() {
  const postTeammate = useSetRecoilState(teammateProfilesState);

  const [hideWorkHours, setHideWorkHours] = useState(true);
  const subteams = useRecoilValue(subteamsState);
  const tags = useRecoilValue(tagsState);

  return (
    <>
      <CreateTeammateProfilePageContent
        initialValues={{
          hideWorkHours,
          setHideWorkHours,
          tagsValueOptions: tags.map(({ name, id }) => ({
            label: name,
            value: name,
          })),
          subteamsValueOptions: subteams.map(({ name, id }) => ({
            label: name,
            value: name,
          })),
        }}
        onSubmit={(data) =>
          postTeammate({
            ...data,
            hidden: true,
            invited: true,
          })
        }
      />
    </>
  );
}

NewProfilePage.propTypes = {};

NewProfilePage.wrappers = ['@/wrappers/features/manageTeammates'];

NewProfilePage.title = 'teammates.new.title';

export default NewProfilePage;
