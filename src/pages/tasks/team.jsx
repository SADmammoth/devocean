import React, { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import TeamViewContent from '../../pagesContent/tasks/TasksPagesContent/TeamViewContent';
import lastTaskViewState from '../../recoil/states/lastTaskViewState';

function TeamViewPage() {
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

TeamViewPage.wrappers = ['@/wrappers/features/viewTasks'];

TeamViewPage.title = 'tasks.team.title';

export default TeamViewPage;
