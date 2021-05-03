import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import DiscussionsPageContent from "../../../../pagesContent/TaskCommentsPagesContent/DiscussionsPageContent";
import lastTaskCommentsViewState from "../../../../recoil/states/lastTaskCommentsViewState";

export default function DiscussionsPage({
  match: {
    params: { id },
  },
}) {
  const setLastView = useSetRecoilState(lastTaskCommentsViewState);
  useEffect(() => {
    setLastView("discussions");
  }, []);

  return (
    <>
      <DiscussionsPageContent id={id} />
    </>
  );
}
