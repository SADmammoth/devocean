import _ from 'lodash';
import { atom, selectorFamily } from 'recoil';

import Client from '../../helpers/Client';
import getPostState from '../helpers/getPostState';
import mergeSelector from '../helpers/mergeSelector';
import noRequest from '../helpers/noRequest';
import serverStateSync from '../helpers/serverStateSync';
import updateSelector from '../helpers/updateSelector';
import userState from './userState';

const baseKey = 'docsState_';

const getState = (userToken) => Client.docs.get(userToken);
const getStateById = (userToken, id) => Client.docs.getById(id, userToken);
const postOne = (userToken, item) => Client.docs.post(item, userToken);
// const patchOne = (userToken, item) =>
//   Client.docs.patch(userToken, item.id, item);

// const postState = getPostState(postOne, patchOne, {
//   tasks: noRequest,
// });

// const subscriber = Subscriber.taskcollections;

const docsStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState, getPostState(postOne))],
});

const docsState = mergeSelector(baseKey, docsStateAtom);

export const docsState_getById = selectorFamily({
  key: baseKey + 'getById',
  get: (docId) => async ({ get }) => {
    const userToken = get(userState);

    return await getStateById(userToken, docId);
  },
});

export const docsState_update = updateSelector(baseKey, docsStateAtom);

export default docsState;
