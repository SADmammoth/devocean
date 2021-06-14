import React, { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';

import DiscussionsPageContent from '../../../../pagesContent/tasks/TaskCommentsPagesContent/DiscussionsPageContent';
import lastTaskCommentsViewState from '../../../../recoil/states/lastTaskCommentsViewState';

function DiscussionsPage({
  match: {
    params: { id },
  },
}) {
  const setLastView = useSetRecoilState(lastTaskCommentsViewState);
  useEffect(() => {
    setLastView('discussions');
  }, []);

  return (
    <>
      <DiscussionsPageContent id={id} />
    </>
  );
}

DiscussionsPage.title = 'tasks.comments.discussions.title';

export default DiscussionsPage;
