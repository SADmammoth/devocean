import request from "superagent";

import filterFalsy from "./filterFalsy";

import prefix from "superagent-prefix";
import Duration from "./Duration";
import {
  fullTaskConverter,
  notificationConverter,
  taskConverter,
} from "./responseConverters";

const apiPath = prefix(process.env.API_PATH || API_PATH);

const Client = {
  notifications: {
    getForTeammate: (id) => {
      return request
        .get(`/notifications/${id}`)
        .use(apiPath)
        .then(({ body }) => body);
    },

    get: () => {
      return request
        .get("/notifications")
        .use(apiPath)
        .then(({ body }) => body);
    },

    receive: () => {
      return request
        .get("/notifications/receive")
        .use(apiPath)
        .then(({ body }) => body);
    },

    post: (notification) => {
      return request
        .post("/notifications")
        .use(apiPath)
        .send(notification)
        .then(({ body }) => body);
    },

    patch: (id, notification) => {
      return request
        .patch(`/notifications/${id}`)
        .use(apiPath)
        .send(notification)
        .then(({ body }) => body);
    },

    cancel: (id) => {
      return request
        .patch(`/notifications/${id}/cancel`)
        .use(apiPath)
        .then(({ body }) => body);
    },
  },
  user: {
    login: (login, password) => {
      return request
        .post("/login")
        .use(apiPath)
        .send({ login, password })
        .then(({ body }) => body);
    },
    register: (login, password) => {
      return request
        .post("/register")
        .use(apiPath)
        .send({ login, password })
        .then(({ body }) => body);
    },
  },

  tasks: {
    get: () => {
      return request.get("/tasks").use(apiPath).then(taskConverter);
    },
    getById: (id) => {
      return request
        .get(`/tasks/${id}`)
        .use(apiPath)
        .then(({ body }) => body);
    },
    post: (task) => {
      const body = {
        // estimate: task.estimate.getTime(),
        // reportedTime: task.reportedTime.getTime(),
        // timeInStatus: new Duration(new Date(task.timeInStatus)),
        ...task,
      };

      return request
        .post("/tasks")
        .use(apiPath)
        .send(body)
        .then(({ body }) => body);
    },

    patch: (id, task) => {
      const body = filterFalsy({
        // estimate: task.estimate.getTime(),
        // reportedTime: task.reportedTime.getTime(),
        // timeInStatus: new Duration(new Date(task.timeInStatus)),
        ...task,
      });

      return request
        .patch(`/tasks/${id}`)
        .use(apiPath)
        .send(body)
        .then(({ body }) => body);
    },

    arrange: (sort, filters) => {
      return request
        .get("/tasks/arrange")
        .use(apiPath)
        .send({
          sort,
          filters,
        })
        .then(({ body }) => body);
    },
  },
  folders: {
    get: () => {
      return request
        .get("/folders")
        .use(apiPath)
        .then(({ body }) => body);
    },
  },
  statuses: {
    get: () => {
      return request
        .get("/statuses")
        .use(apiPath)
        .then(({ body }) => body);
    },
  },
  teammates: {
    get: () => {
      return request
        .get("/teammates")
        .use(apiPath)
        .then(({ body }) => body);
    },
  },
};

export default Client;
