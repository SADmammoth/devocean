import request from "superagent";
import prefix from "superagent-prefix";

const apiPath = prefix(process.env.API_PATH || API_PATH);

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
