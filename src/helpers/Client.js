import request from "superagent";

import RelativeDate from "./RelativeDate";

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

    post: ({ id, ...notification }) => {
      return request
        .post("/notifications")
        .use(apiPath)
        .send({ ...notification, author: notification.author.id })
        .then(({ body }) => body);
    },

    patch: (id, notification) => {
      return request
        .patch(`/notifications/${id}`)
        .use(apiPath)
        .send({ ...notification, author: notification.author?.id })
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
    post: ({ id, ...task }) => {
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

    addToList: (id, listId) => {
      return request
        .patch(`/tasks/${id}/list`)
        .use(apiPath)
        .send({
          list: listId,
        })
        .then(({ body }) => body);
    },

    changeStatus: (id, status) => {
      return request
        .patch(`/tasks/${id}/status`)
        .use(apiPath)
        .send(status)
        .then(({ body }) => body);
    },

    assign: (id, assignee) => {
      return request
        .patch(`/tasks/${id}/assignee`)
        .use(apiPath)
        .send({
          teammateId: assignee.id,
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
    post: ({ id, ...folder }) => {
      return request
        .post("/folders")
        .use(apiPath)
        .send(folder)
        .then(({ body }) => body);
    },
    patch: (id, folder) => {
      return request
        .patch(`/folders/${id}`)
        .use(apiPath)
        .send(folder)
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
    post: (name) => {
      return request
        .post("/statuses")
        .use(apiPath)
        .send({ name })
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

  templates: {
    get: () => {
      return request
        .get("/templates")
        .use(apiPath)
        .then(({ body }) => body);
    },
    getById: (id) => {
      return request
        .get(`/templates/${id}`)
        .use(apiPath)
        .then(({ body }) => body);
    },
  },

  discussions: {
    get: (task) => {
      return request
        .get(`/tasks/${task}/discussions`)
        .use(apiPath)
        .then(({ body }) => body);
    },
    post: (task, discussion) => {
      return request
        .post(`/tasks/${task}/discussions`)
        .use(apiPath)
        .send({ ...discussion, time: new Date() })
        .then(({ body }) => body);
    },
  },
  statusChanges: {
    get: (task) => {
      return request
        .get(`/tasks/${task}/statusChanges`)
        .use(apiPath)
        .then(({ body }) => body);
    },
  },
  history: {
    get: (task) => {
      return request
        .get(`/tasks/${task}/history`)
        .use(apiPath)
        .then(({ body }) => body);
    },
  },
};

export default Client;
