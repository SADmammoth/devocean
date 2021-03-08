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
      label: "Agenda",
    },
    {
      label: "Manage team",
    },
    {
      label: "Manage tasks",
    },
    {
      label: "Review statistics",
    },
    {
      label: "Show all projects",
    },
  ],
};
