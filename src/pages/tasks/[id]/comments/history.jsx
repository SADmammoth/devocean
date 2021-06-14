import React, { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import HistoryPageContent from '../../../../pagesContent/tasks/TaskCommentsPagesContent/HistoryPageContent';
import lastTaskCommentsViewState from '../../../../recoil/states/lastTaskCommentsViewState';

function HistoryPage({
  match: {
    params: { id },
  },
}) {
  const setLastView = useSetRecoilState(lastTaskCommentsViewState);
  useEffect(() => {
    setLastView('history');
  }, []);

  return (
    <>
      <HistoryPageContent id={id} />
    </>
  );
}

HistoryPage.title = 'tasks.comments.history.title';

export default HistoryPage;
