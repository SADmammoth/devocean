import React from "react";

import KanbanViewContent from "../../layouts/Tasks/KanbanViewContent/KanbanViewContent";

export default function Kanban() {
  const setLastView = useSetRecoilState(lastTaskViewState);
  setLastView("kanban");

  return (
    <>
      <KanbanViewContent />{" "}
    </>
  );
}
