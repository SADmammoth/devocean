import _ from 'lodash';
import { atom, atomFamily, selectorFamily } from 'recoil';

import Client from '../../helpers/Client';
import Subscriber from '../../helpers/Subscriber';
import serverRealtimeStateSync from '../helpers/serverRealtimeStateSync';

const baseKey = 'historyState_';

const getState = (task) => () => Client.history.get(task);

const subscriber = Subscriber.history;

const historyState = atomFamily({
  key: baseKey,
  default: [],
  effects_UNSTABLE: (taskId) => [
    serverRealtimeStateSync(subscriber, getState(taskId)),
  ],
});

export default historyState;
