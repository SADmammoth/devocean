import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import StatusesPageContent from "../../../../pagesContent/TaskCommentsPagesContent/StatusesPageContent";
import lastTaskCommentsViewState from "../../../../recoil/states/lastTaskCommentsViewState";

export default function StatusesPage({
  match: {
    params: { id },
  },
}) {
  const setLastView = useSetRecoilState(lastTaskCommentsViewState);
  useEffect(() => {
    setLastView("statuses");
  }, []);

  return (
    <>
      <StatusesPageContent id={id} />
    </>
  );
}
