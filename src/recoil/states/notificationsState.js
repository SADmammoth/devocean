import _ from 'lodash';
import { atom, selector, selectorFamily } from 'recoil';

import formatName from '../../helpers/functions/formatName';
import Client from '../../helpers/services/Client';
import Subscriber from '../../helpers/services/Subscriber';
import RelativeDate from '../../helpers/types/RelativeDate';
import serverRealtimeStateSync from '../helpers/effects/serverRealtimeStateSync';
import getPostState from '../helpers/getPostState';
import noRequest from '../helpers/noRequest';
import mergeSelector from '../helpers/selectors/mergeSelector';
import updateSelector from '../helpers/selectors/updateSelector';

const baseKey = 'notificationsState_';

const getState = (userToken) => Client.notifications.get(userToken);
const postOne = (userToken, item) => Client.notifications.post(item, userToken);
const patchOne = (userToken, item) =>
  Client.notifications.patch(item.id, item, userToken);

const postState = getPostState(postOne, patchOne, {
  status: (userToken, status, item) => {
    if (status === 'cancelled') {
      return Client.notifications.cancel(item.id, userToken);
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
