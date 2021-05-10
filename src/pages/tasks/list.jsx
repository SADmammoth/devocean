import React, { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import ListViewContent from '../../pagesContent/TasksPagesContent/ListViewContent';
import lastTaskViewState from '../../recoil/states/lastTaskViewState';

function List() {
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

List.wrappers = ['@/wrappers/features/viewTasks'];

export default List;
