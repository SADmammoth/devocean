import _ from 'lodash';
import { atom, selector, selectorFamily } from 'recoil';

import Client from '../../helpers/Client';
import RelativeDate from '../../helpers/RelativeDate';
import Subscriber from '../../helpers/Subscriber';
import formatName from '../../helpers/formatName';
import getPostState from '../helpers/getPostState';
import mergeSelector from '../helpers/mergeSelector';
import noRequest from '../helpers/noRequest';
import serverRealtimeStateSync from '../helpers/serverRealtimeStateSync';
import updateSelector from '../helpers/updateSelector';

const baseKey = 'notificationsState_';

const getState = () => Client.notifications.get();
const postOne = (item) => Client.notifications.post(item);
const patchOne = (item) => Client.notifications.patch(item.id, item);

const postState = getPostState(postOne, patchOne, {
  status: (status, item) => {
    if (status === 'cancelled') {
      return Client.notifications.cancel(item.id);
    }
    return noRequest();
  },
});

const subscriber = Subscriber.notifications;

const notificationsStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverRealtimeStateSync(subscriber, getState, postState)],
});

const notificationsState_getToDisplay = selector({
  key: baseKey + 'display',
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
  key: baseKey + 'count',
  get: ({ get }) => {
    const notifications = get(notificationsState);
    return notifications.length;
  },
});

export const notificationsState_getById = selectorFamily({
  key: baseKey + 'getById',
  get: (targetId) => ({ get }) => {
    const notifications = get(notificationsState);
    return (
      notifications.find(({ id }) => id === targetId) || notifications[targetId]
    );
  },
});

export const notificationsState_update = updateSelector(
  baseKey,
  notificationsStateAtom,
);

export const notificationsState_cancel = selectorFamily({
  key: baseKey + 'cancel',
  set: (id) => ({ set }) => {
    set(notificationsState_update(id), { status: 'cancelled' });
  },
});

export default notificationsState;
