import React, { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import TeamViewContent from '../../pagesContent/tasks/TasksPagesContent/TeamViewContent';
import lastTaskViewState from '../../recoil/states/lastTaskViewState';

function Team() {
  const setLastView = useSetRecoilState(lastTaskViewState);
  setLastView('team');
  useEffect(() => {
    setLastView('team');
  }, []);

  return (
    <>
      <TeamViewContent />
    </>
  );
}

Team.wrappers = ['@/wrappers/features/viewTasks'];

export default Team;
