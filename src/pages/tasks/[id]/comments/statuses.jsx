import React, { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import StatusesPageContent from '../../../../pagesContent/tasks/TaskCommentsPagesContent/StatusesPageContent';
import lastTaskCommentsViewState from '../../../../recoil/states/lastTaskCommentsViewState';

function StatusesPage({
  match: {
    params: { id },
  },
}) {
  const setLastView = useSetRecoilState(lastTaskCommentsViewState);
  useEffect(() => {
    setLastView('statuses');
  }, []);

  return (
    <>
      <StatusesPageContent id={id} />
    </>
  );
}

StatusesPage.title = 'tasks.comments.statuses.title';

export default StatusesPage;
