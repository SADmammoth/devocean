import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import HistoryPageContent from "../../../../pagesContent/TaskCommentsPagesContent/HistoryPageContent";
import lastTaskCommentsViewState from "../../../../recoil/states/lastTaskCommentsViewState";

export default function HistoryPage({
  match: {
    params: { id },
  },
}) {
  const setLastView = useSetRecoilState(lastTaskCommentsViewState);
  useEffect(() => {
    setLastView("history");
  }, []);

  return (
    <>
      <HistoryPageContent id={id} />
    </>
  );
}
