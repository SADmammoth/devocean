import { atom, selector, selectorFamily } from "recoil";
import RelativeDate from "../../helpers/RelativeDate";
import _ from "lodash";
import Client from "../../helpers/Client";
import serverStateSync from "../helpers/serverStateSync";
import mergeSelector from "../helpers/mergeSelector";
import updateSelector from "../helpers/updateSelector";
import getPostState from "../helpers/getPostState";
import noRequest from "../helpers/noRequest";
import formatName from "../../helpers/formatName";

const baseKey = "notificationsState_";

const getState = () => Client.notifications.get();
const postOne = (item) => Client.notifications.post(item);
const patchOne = (item) => Client.notifications.patch(item.id, item);

const postState = getPostState(postOne, patchOne, {
  status: (status, item) => {
    if (status === "cancelled") {
      return Client.notifications.cancel(item.id);
    }

    return noRequest();
  },
});

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
      author: formatName({ name: author.name, lastName: author.lastName }),
    }));
  },
  set: async ({ set }, value) => {
    return set(notificationsStateAtom, value);
  },
});

const notificationsState = mergeSelector(baseKey, notificationsStateAtom);

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
