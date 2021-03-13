import { Redirect } from "react-router";
import { useRecoilValue } from "recoil";
import lastTaskViewState from "../../recoil/states/lastTaskViewState";

export default function Index() {
  const lastView = useRecoilValue(lastTaskViewState);

  return <Redirect to={`/tasks/${lastView}`} />;
}
