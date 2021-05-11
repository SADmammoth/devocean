import _ from 'lodash';
import { selectorFamily } from 'recoil';

import Client from '../../helpers/Client';
import userState from './userState';

const baseKey = 'featureAccessState_';

const getState = (userId, feature) => Client.features.get(userId, feature);

const featureAccessState = selectorFamily({
  key: baseKey,
  get: (feature) => async ({ get }) => {
    const userId = get(userState);

    if (!userId) return false;
    return (await getState(userId, feature))?.hasAccess;
  },
});

const getState_array = (userId, features) =>
  Client.features.getArray(userId, features);

export const featureAccessState_array = selectorFamily({
  key: baseKey + 'array',
  get: (features) => async ({ get }) => {
    const userId = get(userState);

    if (!userId) return false;

    if (features.length === 1) {
      return { [features[0]]: await getState(userId, features) };
    }

    return await getState_array(userId, features);
  },
});

export default featureAccessState;
