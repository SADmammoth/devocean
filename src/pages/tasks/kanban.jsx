import React, { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import KanbanViewContent from '../../pagesContent/tasks/TasksPagesContent/KanbanViewContent';
import lastTaskViewState from '../../recoil/states/lastTaskViewState';

function KanbanViewPage() {
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

KanbanViewPage.wrappers = ['@/wrappers/features/viewTasks'];

KanbanViewPage.title = 'tasks.kanban.title';

export default KanbanViewPage;
