import React, { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import ListViewContent from '../../pagesContent/tasks/TasksPagesContent/ListViewContent';
import lastTaskViewState from '../../recoil/states/lastTaskViewState';

function ListViewPage() {
  const setLastView = useSetRecoilState(lastTaskViewState);
  useEffect(() => {
    setLastView('list');
  }, []);

  return (
    <>
      <ListViewContent />
    </>
  );
}

ListViewPage.wrappers = ['@/wrappers/features/viewTasks'];

ListViewPage.title = 'tasks.list.title';

export default ListViewPage;
