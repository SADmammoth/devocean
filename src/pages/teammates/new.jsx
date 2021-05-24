import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import InitTeammateProfilePageContent from '../../pagesContent/InitTeammateProfilePageContent';
import subteamsState from '../../recoil/states/subteamsState';
import tagsState from '../../recoil/states/tagsState';
import teammateProfilesState from '../../recoil/states/teammatesProfilesState';

function New() {
  const postTeammate = useSetRecoilState(teammateProfilesState);

  const [hideWorkHours, setHideWorkHours] = useState(true);
  const subteams = useRecoilValue(subteamsState);
  const tags = useRecoilValue(tagsState);

  return (
    <>
      <InitTeammateProfilePageContent
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

New.propTypes = {};

New.wrappers = ['@/wrappers/features/manageTeammates'];

export default New;
