import _ from 'lodash';
import { atom, selectorFamily } from 'recoil';

import Client from '../../helpers/services/Client';
import serverStateSync from '../helpers/effects/serverStateSync';
import getPostState from '../helpers/getPostState';
import noRequest from '../helpers/noRequest';
import mergeSelector from '../helpers/selectors/mergeSelector';
import updateSelector from '../helpers/selectors/updateSelector';
import userState from './userState';

const baseKey = 'docsState_';

const getState = (userToken) => Client.docs.get(userToken);
const getStateById = (userToken, id) => Client.docs.getById(id, userToken);
const postOne = (userToken, item) => Client.docs.post(item, userToken);
const patchOne = (userToken, item) =>
  Client.docs.patch(item.id, item, userToken);

// const subscriber = Subscriber.taskcollections;

const docsStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [
    serverStateSync(getState, getPostState(postOne, patchOne)),
  ],
});

const docsState = mergeSelector(baseKey, docsStateAtom);

export const docsState_getById = selectorFamily({
  key: baseKey + 'getById',
  get: (docId) => async ({ get }) => {
    const userToken = get(userState);
    const docs = get(docsStateAtom);

    return await getStateById(userToken, docId);
  },
});

export const docsState_update = updateSelector(baseKey, docsStateAtom);

export default docsState;
