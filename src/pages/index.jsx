import { useRecoilValue } from 'recoil';
import { Redirect } from 'umi';

import HomePageContent from '../pagesContent/HomePageContent';
import userState from '../recoil/states/userState';

export default function IndexPage() {
  const userToken = useRecoilValue(userState);

  if (userToken) {
    return <HomePageContent />;
  }

  return <Redirect to="/auth/welcome" />;
}
