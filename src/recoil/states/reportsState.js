import _ from 'lodash';
import { atom, atomFamily, selectorFamily } from 'recoil';

import Client from '../../helpers/Client';
import Subscriber from '../../helpers/Subscriber';
import getPostState from '../helpers/getPostState';
import mergeSelectorFamily from '../helpers/mergeSelectorFamily';
import serverRealtimeStateSync from '../helpers/serverRealtimeStateSync';

const baseKey = 'reportsState_';

const getState = (task) => (userToken) => Client.reports.get(task, userToken);
const postState = (taskId) => (userToken, item) =>
  Client.reports.post(taskId, item, userToken);

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
