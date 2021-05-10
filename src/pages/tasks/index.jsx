import { Redirect } from 'react-router';
import { useRecoilValue } from 'recoil';

import lastTaskViewState from '../../recoil/states/lastTaskViewState';

function Index() {
  const lastView = useRecoilValue(lastTaskViewState);

  return <Redirect to={`/tasks/${lastView}`} />;
}

Index.wrappers = ['@/wrappers/features/viewTasks'];

export default Index;
