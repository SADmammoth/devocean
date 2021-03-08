const notifications = [
  {
    id: "1",
    time: "2h ago",
    title: "Lorem ipsum dolor sit amet",
    author: "Ners",
  },
  {
    id: "2",
    time: "2h ago",
    title: "Lorem ipsum dolor sit amet",
    author: "Ners",
  },
  {
    id: "3",
    time: "2h ago",
    title: "Lorem ipsum dolor sit amet",
    author: "Ners",
  },
  {
    id: "4",
    time: "2h ago",
    title: "Lorem ipsum dolor sit amet",
    author: "Ners",
  },
];

export default {
  "GET /api/notifications": notifications,

  "POST /api/notifications": (req, res) => {
    notifications.push(req.body);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.sendStatus(203);
  },

  "GET /api/navitems": [
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
};
