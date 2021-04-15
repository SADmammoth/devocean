import { atom, selector, selectorFamily } from "recoil";

import RelativeDate from "../../helpers/RelativeDate";

import _ from "lodash";
import Client from "../../helpers/Client";
import serverStateSync from "../helpers/serverStateSync";
import mergeSelector from "../helpers/mergeSelector";
import updateSelector from "../helpers/updateSelector";

const baseKey = "notificationsState_";

const postState = (newValue, oldValue) => {
  const diff = _.difference(newValue, oldValue);
  if (diff.length === 1 && newValue.length !== oldValue.length) {
    return Client.notifications.post(diff[0]);
  }

  if (diff.length === 1 && newValue.length === oldValue.length) {
    const newItem = diff[0];
    const oldItem = _.difference(oldValue, newValue)[0];

    if (newItem.status === "cancelled" && oldItem.status !== "cancelled") {
      return Client.notifications.cancel(newItem.id);
    }

    return Client.notifications.patch(newItem.id, newItem);
  }

  return new Promise(() => {});
};

const getState = () => Client.notifications.get();

const notificationsStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState, postState)],
});

const notificationsState_getToDisplay = selector({
  key: baseKey + "display",
  get: async ({ get }) => {
    const notifications = get(notificationsStateAtom);
    return notifications.map(({ time, author, ...rest }) => ({
      ...rest,
      time: new RelativeDate(time),
      author: author ? `${author.name} ${author.lastName[0]}` : "undefined",
    }));
  },
  set: async ({ set }, value) => {
    return set(notificationStateAtom, value);
  },
});

const notificationsState = mergeSelector(
  baseKey,
  notificationsState_getToDisplay
);

export const notificationsState_count = selector({
  key: baseKey + "count",
  get: ({ get }) => {
    const notifications = get(notificationsState);
    return notifications.length;
  },
});

export const notificationsState_getById = selectorFamily({
  key: baseKey + "getById",
  get: (targetId) => ({ get }) => {
    const notifications = get(notificationsState);
    return (
      notifications.find(({ id }) => id === targetId) || notifications[targetId]
    );
  },
});

export const notificationsState_update = updateSelector(
  baseKey,
  notificationsStateAtom
);

export const notificationsState_cancel = selectorFamily({
  key: baseKey + "cancel",
  set: (id) => ({ set }) => {
    set(notificationsState_update(id), { status: "cancelled" });
  },
});

export default notificationsState;
