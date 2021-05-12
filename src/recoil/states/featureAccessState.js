import _ from 'lodash';
import { selectorFamily } from 'recoil';

import Client from '../../helpers/Client';
import userState from './userState';

const baseKey = 'featureAccessState_';

const getState = (feature, userToken) =>
  Client.features.get(feature, userToken);

const featureAccessState = selectorFamily({
  key: baseKey,
  get: (feature) => async ({ get }) => {
    const userToken = get(userState);

    if (!userToken) return false;
    return (await getState(feature, userToken))?.hasAccess;
  },
});

const getState_array = (userId, features) =>
  Client.features.getArray(userId, features);

export const featureAccessState_array = selectorFamily({
  key: baseKey + 'array',
  get: (features) => async ({ get }) => {
    const userToken = get(userState);

    if (!userToken) return false;

    if (features.length === 1) {
      return { [features[0]]: await getState(features, userToken) };
    }

    return await getState_array(features, userToken);
  },
});

export default featureAccessState;
