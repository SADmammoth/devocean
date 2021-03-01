import concatPath from "./concatPath";

const apiPath = "api";

export default {
  getNotifications: async () => {
    const response = await fetch(concatPath(apiPath, "notifications"));

    return response.json();
  },

  postNotifications: async (notification) => {
    const response = await fetch(concatPath(apiPath, "notifications"), {
      method: "POST",
      body: JSON.stringify(notification),
    });

    return response;
  },
};
