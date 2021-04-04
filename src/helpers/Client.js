import request from "superagent";
import prefix from "superagent-prefix";
import Duration from "./Duration";

const apiPath = prefix(process.env.API_PATH || API_PATH);

const Client = {
  notifications: {
    get: () => {
      return request
        .get("/notifications")
        .use(apiPath)
        .then((res) => res.body);
    },

    post: (notification) => {
      return request
        .post("/notifications")
        .use(apiPath)
        .send(notification)
        .then((res) => res.body);
    },
  },
  user: {
    login: (login, password) => {
      return request
        .post("/login")
        .use(apiPath)
        .send({ login, password })
        .then((res) => res.body);
    },
    register: (login, password) => {
      return request
        .post("/register")
        .use(apiPath)
        .send({ login, password })
        .then((res) => res.body);
    },
  },

  tasks: {
    get: () => {
      return request
        .get("/tasks")
        .use(apiPath)
        .then(({ body }) =>
          body.map(({ estimate, reportedTime, ...other }) => ({
            estimate: new Duration(estimate),
            reportedTime: new Duration(reportedTime),
            ...other,
          }))
        );
    },
    getById: (id) => {
      return request
        .get("/tasks")
        .query({ id })
        .use(apiPath)
        .then(({ body: { estimate, reportedTime, assignee, ...other } }) => ({
          estimate: estimate ? new Duration(estimate) : null,
          reportedTime: estimate ? new Duration(reportedTime) : null,
          assignee: assignee
            ? {
                displayName: `${assignee.name} ${assignee.lastName[0]}.`,
                id: assignee.id,
                dateAssigned: assignee.dateAssigned,
              }
            : null,
          ...other,
        }));
    },
    post: (task) => {
      const body = {
        estimate: task.estimate.getTime(),
        reportedTime: task.reportedTime.getTime(),
        ...task,
      };

      return request
        .post("/tasks")
        .use(apiPath)
        .send(body)
        .then((res) => res.body);
    },
  },
  folders: {
    get: () => {
      return request
        .get("/folders")
        .use(apiPath)
        .then((res) => res.body);
    },
  },
  statuses: {
    get: () => {
      return request
        .get("/statuses")
        .use(apiPath)
        .then((res) => res.body);
    },
  },
  teammates: {
    get: () => {
      return request
        .get("/teammates")
        .use(apiPath)
        .then((res) => res.body);
    },
  },
};

export default Client;
