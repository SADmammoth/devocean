import _ from 'lodash';
import { atom, atomFamily, selectorFamily } from 'recoil';

import Client from '../../helpers/services/Client';
import Subscriber from '../../helpers/services/Subscriber';
import serverRealtimeStateSync from '../helpers/effects/serverRealtimeStateSync';
import getPostState from '../helpers/getPostState';
import mergeSelectorFamily from '../helpers/selectors/mergeSelectorFamily';

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
