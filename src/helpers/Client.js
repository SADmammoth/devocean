import request from "superagent";
import prefix from "superagent-prefix";

const apiPath = prefix("api");

export default {
  getNotifications: async () => {
    const response = await request.get("/notifications").use(apiPath);
    return response.body;
  },

  postNotifications: async (notification) => {
    await request.post("/notifications").use(apiPath).send(notification);
  },
};
