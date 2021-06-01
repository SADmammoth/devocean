const description = `
hi altaLorem markdownum elabique calido, in orbam inmutat dederat, qui, esse. Quae
gelido Martis **per** consilium! Aliis et fama boves est dum: si meae fatigant.
Genitor venit **membra forsitan pendet**. Deus est: subcubuisse in fugit
viscata agros albis quicumque via loco umerique et nymphae Persea!  
Repetito praemia profundi inde contermina draconem Atlas, numina aura, Aurora
inposita longae effetum. Mihi verba, a detulit puppim amplexu dare ferro cum
habitura cumque. A sibila?;`;

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
    title: "Tilwerewr wererwer 1 1 Tilwerewr wererwer 1",
    priority: "high",
    estimate: "2h",
    reportedTime: "1h",
    tag: { color: "#de1111", name: "backend" },
    status: "open",
    assignee: "1",
  },
  {
    id: "2",
    title: "Tilwerewr wererwer 2",
    priority: "high",
    tag: { color: "#de1111", name: "backend" },
    status: "open",
    assignee: "1",
  },
  {
    id: "3",
    title: "Tilwerewr wererwer 3",
    priority: "high",
    tag: { color: "#de1111", name: "backend" },
    status: "open",
    assignee: "1",
  },
  {
    id: "4",
    title: "Tilwerewr wererwer 4",
    priority: "high",
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
    assignee: "2",
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
    name: "open",
    tasks: ["1", "2", "3"],
  },
  {
    name: "wip",
    tasks: ["5", "6"],
  },
  {
    name: "closed",
    tasks: [],
  },
  {
    name: "backlog",
    tasks: ["4"],
  },
];

const teammates = [
  {
    id: "1",
    name: "Mike",
    lastName: "Foster",
    assignedTasks: ["1", "2", "3"],
    referAs: "he",
  },
  {
    id: "2",
    name: "Daniel",
    lastName: "Macros",
    assignedTasks: ["4", "5"],
    referAs: "he",
  },
  {
    id: "3",
    name: "Constantine",
    lastName: "Switzwerdengen",
    assignedTasks: [],
    referAs: "she",
  },
];

const fullTasks = [
  {
    id: "1",
    title: "Tilwerewr wererwer 1 Tilwerewr wererwer 1",
    priority: "high",
    estimate: "2h",
    reportedTime: "1h",
    tag: { color: "#de1111", name: "backend" },
    status: { name: "open", timeInStatus: "2d" },
    assignee: {
      id: "1",
      name: "Mike",
      lastName: "Foster",
      dateAssigned: "2d ago",
    },
    description,
  },
  {
    id: "2",
    title: "Tilwerewr wererwer 2",
    priority: "high",
    tag: { color: "#de1111", name: "backend" },
    status: { name: "open", timeInStatus: "2d" },
    assignee: {
      id: "1",
      name: "Mike",
      lastName: "Foster",
      dateAssigned: "2d ago",
    },
    description,
  },
  {
    id: "3",
    title: "Tilwerewr wererwer 3",
    priority: "high",
    tag: { color: "#de1111", name: "backend" },
    status: { name: "open", timeInStatus: "2d" },
    assignee: {
      id: "2",
      name: "Daniel",
      lastName: "Macros",
      dateAssigned: "4d ago",
    },
    description,
  },
  {
    id: "4",
    title: "Tilwerewr wererwer 4",
    priority: "high",
    tag: { color: "#de1111", name: "backend" },
    status: { name: "backlog", timeInStatus: "2d" },
    description,
  },
  {
    id: "5",
    title: "Tilwerewr wererwer 5",
    priority: "blocker",
    estimate: "2h",
    reportedTime: "1h",
    tag: { color: "#de1111", name: "backend" },
    status: { name: "wip", timeInStatus: "2d" },
    performance: "low",
    assignee: {
      id: "2",
      name: "Mike",
      lastName: "Foster",
      dateAssigned: "2d ago",
    },
    description,
  },
  {
    id: "6",
    title: "Tilwerewr wererwer 6",
    priority: "blocker",
    estimate: "2h",
    reportedTime: "1h",
    tag: { color: "#de1111", name: "backend" },
    status: { name: "wip", timeInStatus: "2d" },
    performance: "low",
    description,
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

  "GET /api/tasks": ({ query }, res) => {
    if (query && query.id) {
      res.send(fullTasks.find(({ id }) => id === query.id));
      return;
    }

    res.send(tasks);
  },
  "GET /api/tasks/arrange": ({ body }, res) => {
    res.send(tasks.map((item, id) => id));
  },
  "POST /api/tasks": (req, res) => {
    tasks.push(req.body);

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.sendStatus(203);
  },

  "GET /api/folders": folders,
  "GET /api/statuses": statuses,
  "GET /api/teammates": teammates,
};
