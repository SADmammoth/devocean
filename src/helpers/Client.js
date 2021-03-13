import request from "superagent";
import prefix from "superagent-prefix";

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
      return request.post("/notifications").use(apiPath).send(notification);
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
};

export default Client;
