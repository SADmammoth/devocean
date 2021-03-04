import request from "superagent";
import prefix from "superagent-prefix";

const apiPath = prefix("api");

const Client = {
  getNotifications: () => {
    return request
      .get("/notifications")
      .use(apiPath)
      .then((res) => res.body);
  },

  postNotifications: (notification) => {
    return request.post("/notifications").use(apiPath).send(notification);
  },
};

export default Client;
