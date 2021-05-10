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
    console.log(userId);
    if (!userId) return false;
    return (await getState(userId, feature))?.hasAccess;
  },
});

export default featureAccessState;
