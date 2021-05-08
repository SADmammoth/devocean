import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import ReportsPageContent from "../../../../pagesContent/TaskCommentsPagesContent/ReportsPageContent";
import lastTaskCommentsViewState from "../../../../recoil/states/lastTaskCommentsViewState";

export default function ReportsPage({
  match: {
    params: { id },
  },
}) {
  const setLastView = useSetRecoilState(lastTaskCommentsViewState);
  useEffect(() => {
    setLastView("reports");
  }, []);

  return (
    <>
      <ReportsPageContent id={id} />
    </>
  );
}
