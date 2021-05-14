import _ from 'lodash';
import { atom, atomFamily, selectorFamily } from 'recoil';

import Client from '../../helpers/services/Client';
import Subscriber from '../../helpers/services/Subscriber';
import serverRealtimeStateSync from '../helpers/effects/serverRealtimeStateSync';

const baseKey = 'historyState_';

const getState = (task) => (userToken) => Client.history.get(task, userToken);

const subscriber = Subscriber.history;

const historyState = atomFamily({
  key: baseKey,
  default: [],
  effects_UNSTABLE: (taskId) => [
    serverRealtimeStateSync(subscriber, getState(taskId)),
  ],
});

export default historyState;
