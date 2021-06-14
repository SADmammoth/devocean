import { Redirect } from 'react-router';
import { useRecoilValue } from 'recoil';

import lastTaskCommentsViewState from '../../../../recoil/states/lastTaskCommentsViewState';

function Index({
  match: {
    params: { id },
  },
}) {
  const lastView = useRecoilValue(lastTaskCommentsViewState);

  return <Redirect to={`/tasks/${id}/comments/${lastView}`} />;
}

Index.title = 'tasks.comments.title';

export default Index;
