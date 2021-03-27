import React from "react";

import KanbanViewContent from "../../pagesContent/TasksPagesContent/KanbanViewContent";

export default function Kanban() {
  const setLastView = useSetRecoilState(lastTaskViewState);
  setLastView("kanban");

  return (
    <>
      <KanbanViewContent />{" "}
    </>
  );
}
