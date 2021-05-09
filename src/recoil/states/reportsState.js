import _ from 'lodash';
import { atom, atomFamily, selectorFamily } from 'recoil';

import Client from '../../helpers/Client';
import Subscriber from '../../helpers/Subscriber';
import getPostState from '../helpers/getPostState';
import mergeSelectorFamily from '../helpers/mergeSelectorFamily';
import serverRealtimeStateSync from '../helpers/serverRealtimeStateSync';

const baseKey = 'reportsState_';

const getState = (task) => () => Client.reports.get(task);
const postState = (taskId) => (item) => Client.reports.post(taskId, item);

const subscriber = Subscriber.reports;

const reportsStateAtom = atomFamily({
  key: baseKey,
  default: [],
  effects_UNSTABLE: (taskId) => [
    serverRealtimeStateSync(
      subscriber,
      getState(taskId),
      getPostState(postState(taskId)),
    ),
  ],
});

const reportsState = mergeSelectorFamily(baseKey, reportsStateAtom);

export default reportsState;
