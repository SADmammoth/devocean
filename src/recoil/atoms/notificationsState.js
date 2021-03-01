import { atom, selector, useSetRecoilState } from "recoil";

const baseKey = "notificationsState_";

const notificationsState = atom({
  key: baseKey,
  default: [],
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

  return (...newNotifications) => {
    setNotifications((notifications) => {
      console.log(newNotifications);
      return [...notifications, ...newNotifications];
    });
  };
};

export default notificationsState;
