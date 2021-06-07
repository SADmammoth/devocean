import { instanceOf } from 'prop-types';
import request from 'superagent';
import prefix from 'superagent-prefix';

import filterFalsy from '../converters/filterFalsy';
import {
  navItemsConverter,
  taskConverter,
  fullTaskConverter,
  foldersConverter,
} from '../converters/responseConverters';
import Duration from '../types/Duration';
import RelativeDate from '../types/RelativeDate';

const apiPath = prefix(process.env.API_PATH || API_PATH);
const authPath = prefix(process.env.AUTH_PATH || AUTH_PATH);

!request.Request.prototype.fields &&
  Object.defineProperty(request.Request.prototype, 'fields', {
    value: function (items) {
      if (items && typeof items === 'object') {
        for (let key in items) {
          if (items.hasOwnProperty(key)) {
            let item = items[key];

            if (typeof item === 'function') {
              continue;
            } else if (item instanceof Array) {
              for (let i in item) {
                this.field(key, item[i]);
              }
              continue;
            } else if (typeof item === 'object') {
              item = JSON.stringify(item);
            }

            this.field(key, item);
          }
        }
      }

      return this;
    },
  });

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
        .send(notification)
        .then(({ body }) => body);
    },

    patch: (id, notification, userToken) => {
      return request
        .patch(`/notifications/${id}`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send(notification)
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
        .then(({ text }) => text);
    },
    logout: (teammateId) => {
      return request
        .patch('/logout')
        .use(authPath)
        .send({ teammateId })
        .then(({ text }) => text);
    },
    register: (login, password, userToken) => {
      return request
        .post('/register')
        .use(authPath)
        .send({ login, password })
        .then(({ body }) => body);
    },
    getData: (userToken) => {
      return request
        .post('/checkToken')
        .use(authPath)
        .send({ token: userToken })
        .then(({ body }) => body);
    },
    delete: (userToken) => {
      return request
        .delete('/self')
        .use(authPath)
        .send({ token: userToken })
        .then(({ body }) => body);
    },
    delete: (login, userToken) => {
      return request
        .delete('/user')
        .use(authPath)
        .auth(userToken, { type: 'bearer' })
        .send({ login })
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
        .then(fullTaskConverter);
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
        reportedTime: task.reportedTime.getHours(),
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
        .then(foldersConverter);
    },
    post: ({ id, name, color, ...folder }, userToken) => {
      return request
        .post('/folders')
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send({ ...folder, name, tag: { color, name } })
        .then(({ body }) => body);
    },
    patch: (id, { name, color, ...folder }, userToken) => {
      return request
        .patch(`/folders/${id}`)
        .auth(userToken, { type: 'bearer' })
        .use(apiPath)
        .send({ ...folder, name, tag: { color, name } })
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
    patch: (id, doc, userToken) => {
      return request
        .patch(`/docs/${id}`)
        .use(apiPath)
        .auth(userToken, { type: 'bearer' })
        .send(doc)
        .then(({ body }) => body);
    },
  },
  navitems: {
    get: (userToken) => {
      return request
        .get('/navItems')
        .use(apiPath)
        .auth(userToken, { type: 'bearer' })
        .then(({ body }) => body);
    },
  },
  teammateProfiles: {
    get: (userToken) => {
      return request
        .get('/teammates/profiles')
        .use(apiPath)
        .auth(userToken, { type: 'bearer' })
        .then(({ body }) => body);
    },
    getById: (id, userToken) => {
      return request
        .get(`/teammates/profiles/${id}`)
        .use(apiPath)
        .auth(userToken, { type: 'bearer' })
        .then(({ body }) => body);
    },
    post: ({ id, avatar, ...teammate }, userToken) => {
      return request
        .post(`/teammates`)
        .use(apiPath)
        .fields(teammate)
        .attach('avatar', avatar)
        .auth(userToken, { type: 'bearer' })
        .then(({ body }) => body);
    },
    patch: (id, { avatar, ...teammate }, userToken) => {
      return request
        .patch(`/teammates/${id}`)
        .use(apiPath)
        .fields(teammate)
        .attach('avatar', avatar)
        .auth(userToken, { type: 'bearer' })
        .then(({ body }) => body);
    },
  },
  subteams: {
    get: (userToken) => {
      return request
        .get('/subteams')
        .use(apiPath)
        .auth(userToken, { type: 'bearer' })
        .then(({ body }) => body);
    },
    post: ({ id, ...subteam }, userToken) => {
      return request
        .post('/subteams')
        .use(apiPath)
        .send(subteam)
        .auth(userToken, { type: 'bearer' })
        .then(({ body }) => body);
    },
  },
  tags: {
    get: (userToken) => {
      return request
        .get('/teammates/tags')
        .use(apiPath)
        .auth(userToken, { type: 'bearer' })
        .then(({ body }) => body);
    },
    post: ({ id, ...tag }, userToken) => {
      return request
        .post('/teammates/tags')
        .use(apiPath)
        .send(tag)
        .auth(userToken, { type: 'bearer' })
        .then(({ body }) => body);
    },
  },
};

export default Client;
