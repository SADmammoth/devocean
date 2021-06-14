import React, { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import ReportsPageContent from '../../../../pagesContent/tasks/TaskCommentsPagesContent/ReportsPageContent';
import lastTaskCommentsViewState from '../../../../recoil/states/lastTaskCommentsViewState';

function ReportsPage({
  match: {
    params: { id },
  },
}) {
  const setLastView = useSetRecoilState(lastTaskCommentsViewState);
  useEffect(() => {
    setLastView('reports');
  }, []);

  return (
    <>
      <ReportsPageContent id={id} />
    </>
  );
}

ReportsPage.title = 'tasks.comments.reports.title';

export default ReportsPage;
