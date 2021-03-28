import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import KanbanViewContent from "../../pagesContent/TasksPagesContent/KanbanViewContent";
import lastTaskViewState from "../../recoil/states/lastTaskViewState";

export default function Kanban() {
  const setLastView = useSetRecoilState(lastTaskViewState);
  setLastView("kanban");
  useEffect(() => {
    setLastView("kanban");
  }, []);

  return (
    <>
      <KanbanViewContent />
    </>
  );
}
