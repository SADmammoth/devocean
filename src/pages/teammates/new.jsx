import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { useSetRecoilState } from 'recoil';

import InitTeammateProfilePageContent from '../../pagesContent/InitTeammateProfilePageContent';
import teammateProfilesState from '../../recoil/states/teammatesProfilesState';

function New() {
  const postTeammate = useSetRecoilState(teammateProfilesState);

  const [hideWorkHours, setHideWorkHours] = useState(true);
  return (
    <>
      <InitTeammateProfilePageContent
        initialValues={{
          hideWorkHours,
          setHideWorkHours,
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
