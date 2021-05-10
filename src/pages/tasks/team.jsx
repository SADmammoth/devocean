import React from 'react';

import TeamViewContent from '../../pagesContent/TasksPagesContent/TeamViewContent';

function Team() {
  return (
    <>
      <TeamViewContent />
    </>
  );
}

Team.wrappers = ['@/wrappers/features/viewTasks'];

export default Team;
