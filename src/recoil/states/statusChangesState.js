import _ from 'lodash';
import { atom, atomFamily, selectorFamily } from 'recoil';

import Client from '../../helpers/Client';
import Subscriber from '../../helpers/Subscriber';
import serverRealtimeStateSync from '../helpers/serverRealtimeStateSync';

const baseKey = 'statusChangesState_';

const getState = (task) => () => Client.statusChanges.get(task);

const subscriber = Subscriber.statusChanges;

const statusChangesState = atomFamily({
  key: baseKey,
  default: [],
  effects_UNSTABLE: (taskId) => [
    serverRealtimeStateSync(subscriber, getState(taskId)),
  ],
});

export default statusChangesState;
