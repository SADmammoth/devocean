import request from 'superagent';
import prefix from 'superagent-prefix';

import Duration from './Duration';
import RelativeDate from './RelativeDate';
import filterFalsy from './filterFalsy';
import { taskConverter } from './responseConverters';

const apiPath = prefix(process.env.API_PATH || API_PATH);
const authPath = prefix(process.env.AUTH_PATH || AUTH_PATH);

const Client = {
  notifications: {
    getForTeammate: (id, userToken) => {
      return request
        .get(`/notifications/${id}`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },

    get: (userToken) => {
      return request
        .get('/notifications')
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },

    receive: (userToken) => {
      return request
        .get('/notifications/receive')
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },

    post: ({ id, ...notification }, userToken) => {
      return request
        .post('/notifications')
        .auth(userToken, { type: 'bearer' })
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

    cancel: (id, userToken) => {
      return request
        .patch(`/notifications/${id}/cancel`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },
  },

  user: {
    login: (login, password) => {
      return request
        .post('/login')
        .use(authPath)
        .send({ login, password })
        .then(({ body }) => body);
    },
    register: (login, password, userToken) => {
      return request
        .post('/register')
        .auth(userToken, { type: 'bearer' })
        .use(authPath)
        .send({ login, password })
        .then(({ body }) => body);
    },
  },

  tasks: {
    get: (userToken) => {
      return request
        .get('/tasks')
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(taskConverter);
    },
    getById: (id, userToken) => {
      return request
        .get(`/tasks/${id}`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },
    post: ({ id, ...task }, userToken) => {
      const body = {
        ...task,
        estimate: new Duration(task.estimate).getHours(),
        // reportedTime: task.reportedTime.getTime(),
        // timeInStatus: new Duration(new Date(task.timeInStatus)),
      };

      return request
        .post('/tasks')
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send(body)
        .then(({ body }) => body);
    },

    patch: (id, task, userToken) => {
      const body = filterFalsy({
        ...task,
        estimate: new Duration(task.estimate).getHours(),
        // reportedTime: task.reportedTime.getTime(),
        // timeInStatus: new Duration(new Date(task.timeInStatus)),
      });

      return request
        .patch(`/tasks/${id}`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send(body)
        .then(({ body }) => body);
    },

    arrange: (sort, filters, userToken) => {
      return request
        .get('/tasks/arrange')
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send({
          sort,
          filters,
        })
        .then(({ body }) => body);
    },

    addToList: (id, listId, userToken) => {
      return request
        .patch(`/tasks/${id}/list`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send({
          list: listId,
        })
        .then(({ body }) => body);
    },

    changeStatus: (id, status, userToken) => {
      return request
        .patch(`/tasks/${id}/status`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send(status)
        .then(({ body }) => body);
    },

    assign: (id, assignee, userToken) => {
      return request
        .patch(`/tasks/${id}/assignee`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send({
          teammateId: assignee.id,
        })
        .then(({ body }) => body);
    },

    delete: (id, userToken) => {
      return request
        .delete(`/tasks/${id}`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },
  },

  folders: {
    get: (userToken) => {
      return request
        .get('/folders')
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },
    post: ({ id, ...folder }, userToken) => {
      return request
        .post('/folders')
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send(folder)
        .then(({ body }) => body);
    },
    patch: (id, folder, userToken) => {
      return request
        .patch(`/folders/${id}`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send(folder)
        .then(({ body }) => body);
    },
  },
  statuses: {
    get: (userToken) => {
      return request
        .get('/statuses')
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },
    post: (name, userToken) => {
      return request
        .post('/statuses')
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send({ name })
        .then(({ body }) => body);
    },
  },

  teammates: {
    get: (userToken) => {
      return request
        .get('/teammates')
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },
  },

  templates: {
    get: (userToken) => {
      return request
        .get('/templates')
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },
    getById: (id, userToken) => {
      return request
        .get(`/templates/${id}`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },
  },

  discussions: {
    get: (task, userToken) => {
      return request
        .get(`/tasks/${task}/discussions`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },
    post: (task, discussion, userToken) => {
      return request
        .post(`/tasks/${task}/discussions`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send({ ...discussion, time: new Date() })
        .then(({ body }) => body);
    },
  },
  statusChanges: {
    get: (task, userToken) => {
      return request
        .get(`/tasks/${task}/statusChanges`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },
  },
  history: {
    get: (task, userToken) => {
      return request
        .get(`/tasks/${task}/history`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },
  },
  reports: {
    get: (task, userToken) => {
      return request
        .get(`/tasks/${task}/reports`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .then(({ body }) => body);
    },
    post: (task, report, userToken) => {
      return request
        .post(`/tasks/${task}/reports`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send({ ...report, time: new Date() })
        .then(({ body }) => body);
    },
  },

  features: {
    get: (feature, userToken) => {
      return request
        .get(`/access/feature`)
        .use(authPath)
        .query({ feature })
        .auth(userToken, { type: 'bearer' })
        .then(({ body }) => body);
    },
    getArray: (features, userToken) => {
      return request
        .get(`/access/features`)
        .auth(userToken, { type: 'bearer' })
        .use(authPath)
        .query({ features })
        .then(({ body }) => body);
    },
  },
  docs: {
    get: (userToken) => {
      return request
        .get('/docs')
        .use(apiPath)
        .auth(userToken, { type: 'bearer' })
        .then(({ body }) => body);
    },
    getById: (id, userToken) => {
      return request
        .get(`/docs/${id}`)
        .use(apiPath)
        .auth(userToken, { type: 'bearer' })
        .then(({ body }) => body);
    },
    post: (doc, userToken) => {
      return request
        .post('/docs')
        .use(apiPath)
        .auth(userToken, { type: 'bearer' })
        .send(doc)
        .then(({ body }) => body);
    },
  },
};

export default Client;
