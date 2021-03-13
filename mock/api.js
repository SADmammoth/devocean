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

  "POST /api/login": (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { login, password } = req.body;
    if (login === "login" && password === "pass") {
      res.sendStatus(200);
      res.send({ id: 0 });
    } else {
      res.sendStatus(404);
      res.send("User not found");
    }
  },
  "POST /api/register": (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.sendStatus(200);
  },
};
