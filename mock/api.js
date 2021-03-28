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

const tasks = [
  {
    id: "1",
    title: "Tilwerewr wererwer 1",
    priority: "high",
    estimate: "2h",
    reportedTime: "1h",
    tag: { color: "#de1111", name: "backend" },
    status: "open",
  },
  {
    id: "2",
    title: "Tilwerewr wererwer 2",
    priority: "high",
    estimate: "2h",
    reportedTime: "1h",
    tag: { color: "#de1111", name: "backend" },
    status: "open",
  },
  {
    id: "3",
    title: "Tilwerewr wererwer 3",
    priority: "high",
    estimate: "2h",
    reportedTime: "1h",
    tag: { color: "#de1111", name: "backend" },
    status: "open",
  },
  {
    id: "4",
    title: "Tilwerewr wererwer 4",
    priority: "high",
    estimate: "2h",
    reportedTime: "1h",
    tag: { color: "#de1111", name: "backend" },
    status: "backlog",
  },
  {
    id: "5",
    title: "Tilwerewr wererwer 5",
    priority: "blocker",
    estimate: "2h",
    reportedTime: "1h",
    tag: { color: "#de1111", name: "backend" },
    status: "wip",
  },
  {
    id: "6",
    title: "Tilwerewr wererwer 6",
    priority: "blocker",
    estimate: "2h",
    reportedTime: "1h",
    tag: { color: "#de1111", name: "backend" },
    status: "wip",
  },
];

const folders = [
  {
    id: "1",
    name: "Folder",
    children: ["2"],
  },
  {
    id: "2",
    name: "Subfolder",
    parent: "1",
    children: ["3", "6"],
  },
  {
    id: "3",
    name: "List",
    parent: "2",
    tasks: ["1", "2", "3"],
  },
  {
    id: "4",
    name: "List 2",
    tasks: ["4"],
  },
  {
    id: "5",
    name: "List 3",
    tasks: ["5"],
  },
  {
    id: "6",
    parent: "2",
    name: "List 4",
    children: ["7"],
  },
  {
    id: "7",
    parent: "6",
    name: "List 5",
    tasks: ["6"],
  },
];

const statuses = [
  {
    id: "open",
    tasks: ["1", "2", "3"],
  },
  {
    id: "wip",
    tasks: ["5", "6"],
  },
  {
    id: "closed",
    tasks: [],
  },
  {
    id: "backlog",
    tasks: ["4"],
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

  "GET /api/tasks": tasks,

  "POST /api/tasks": (req, res) => {
    tasks.push(req.body);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.sendStatus(203);
  },

  "GET /api/folders": folders,
  "GET /api/statuses": statuses,
};
