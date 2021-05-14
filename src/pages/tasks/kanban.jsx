import React, { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import KanbanViewContent from '../../pagesContent/tasks/TasksPagesContent/KanbanViewContent';
import lastTaskViewState from '../../recoil/states/lastTaskViewState';

function Kanban() {
  const setLastView = useSetRecoilState(lastTaskViewState);
  setLastView('kanban');
  useEffect(() => {
    setLastView('kanban');
  }, []);

  return (
    <>
      <KanbanViewContent />
    </>
  );
}

Kanban.wrappers = ['@/wrappers/features/viewTasks'];

export default Kanban;
