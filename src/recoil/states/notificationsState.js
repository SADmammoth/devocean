import { useMutation, useQuery, useQueryClient } from "react-query";
import { atom, selector, useSetRecoilState } from "recoil";
import _ from "lodash";

import Client from "../../helpers/Client";
import serverStateSync from "../helpers/serverStateSync";

const baseKey = "notificationsState_";

const syncState = async (newValue, oldValue) => {
  const diff = _.difference(newValue, oldValue);
  if (diff.length === 1) {
    await Client.postNotifications(diff[0]);
  }
};

const notificationsState = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(Client.getNotifications, syncState)],
});

export const notificationsState_count = selector({
  key: baseKey + "count",
  get: ({ get }) => {
    const notifications = get(notificationsState);
    return notifications.length;
  },
});

export const useNotificationsState_add = () => {
  const setNotifications = useSetRecoilState(notificationsState);

  return (newNotification) => {
    setNotifications((notifications) => {
      return [
        ...notifications,
        { id: notifications.length, ...newNotification },
      ];
    });
  };
};

export default notificationsState;
