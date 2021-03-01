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
    console.log(req.body);
    notifications.push({
      time: "4h ago",
      title: "Notification",
      author: "Doe",
    });

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(200);
  },
};
