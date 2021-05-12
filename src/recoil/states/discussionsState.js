import _ from 'lodash';
import { atom, atomFamily, selectorFamily } from 'recoil';

import Client from '../../helpers/Client';
import Subscriber from '../../helpers/Subscriber';
import getPostState from '../helpers/getPostState';
import mergeSelectorFamily from '../helpers/mergeSelectorFamily';
import serverRealtimeStateSync from '../helpers/serverRealtimeStateSync';

const baseKey = 'discussionsState_';

const getState = (task) => (userToken) =>
  Client.discussions.get(task, userToken);
const postState = (taskId) => (userToken, item) =>
  Client.discussions.post(taskId, item, userToken);

const subscriber = Subscriber.discussions;

const discussionsStateAtom = atomFamily({
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

const discussionsState = mergeSelectorFamily(baseKey, discussionsStateAtom);

export default discussionsState;
