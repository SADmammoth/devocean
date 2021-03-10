import { selector } from "recoil";
import Client from "../../helpers/Client";

const baseKey = "navitemsState_";

const navitemsState = selector({
  key: baseKey,
  get: () => [
    {
      id: "agenda",
      title: "Agenda",
      label: "Agenda",
    },
    { id: "manageteam", title: "Manage team", label: "Manage team" },
    { id: "managetasks", title: "Manage tasks", label: "Manage tasks" },
    {
      id: "reviewstatistics",
      title: "Review statistics",
      label: "Review statistics",
    },
    {
      id: "showallprojects",
      title: "Show all projects",
      label: "Show all projects",
    },
  ],
});

export default navitemsState;
