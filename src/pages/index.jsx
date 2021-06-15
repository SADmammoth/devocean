import { useRecoilValue } from 'recoil';
import { Redirect } from 'umi';

import HomePageContent from '../pagesContent/HomePageContent';
import userState from '../recoil/states/userState';

function IndexPage() {
  const userToken = useRecoilValue(userState);

  if (userToken) {
    return <HomePageContent />;
  }

  return <Redirect to="/auth/welcome" />;
}

IndexPage.title = 'home.title';

export default IndexPage;
