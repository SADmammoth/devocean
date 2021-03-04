import { atom, selector } from "recoil";
import _ from "lodash";
import Client from "../../helpers/Client";
import serverStateSync from "../helpers/serverStateSync";
import mergeSelector from "../helpers/mergeSelector";

const baseKey = "notificationsState_";

const postState = (newValue, oldValue) => {
  const diff = _.difference(newValue, oldValue);
  if (diff.length === 1) {
    return Client.postNotifications(diff[0]);
  }
};

const getState = () => Client.getNotifications();

const notificationsStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState, postState)],
});

const notificationsState = mergeSelector(baseKey, notificationsStateAtom);

export const notificationsState_count = selector({
  key: baseKey + "count",
  get: ({ get }) => {
    const notifications = get(notificationsState);
    return notifications.length;
  },
});

export default notificationsState;
