import { useRecoilValue } from 'recoil';

import HomePageContent from '../pagesContent/HomePageContent';
import WelcomePageContent from '../pagesContent/WelcomePageContent';
import userState from '../recoil/states/userState';

export default function IndexPage() {
  const userToken = useRecoilValue(userState);
  if (userToken) {
    return <HomePageContent />;
  }

  return <WelcomePageContent />;
}
