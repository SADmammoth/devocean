import _ from 'lodash';
import { atom, atomFamily, selectorFamily } from 'recoil';

import Client from '../../helpers/services/Client';
import Subscriber from '../../helpers/services/Subscriber';
import serverRealtimeStateSync from '../helpers/effects/serverRealtimeStateSync';

const baseKey = 'statusChangesState_';

const getState = (task) => (userToken) =>
  Client.statusChanges.get(task, userToken);

const subscriber = Subscriber.statuses;

const statusChangesState = atomFamily({
  key: baseKey,
  default: [],
  effects_UNSTABLE: (taskId) => [
    serverRealtimeStateSync(subscriber, getState(taskId)),
  ],
});

export default statusChangesState;
