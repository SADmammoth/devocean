import _ from 'lodash';
import { atom, selectorFamily } from 'recoil';

import Client from '../../helpers/Client';
import serverStateSync from '../helpers/serverStateSync';
import updateSelector from '../helpers/updateSelector';
import userState from './userState';

const baseKey = 'teammateProfilesState_';

const getState = (userToken) => Client.teammateProfiles.get(userToken);

const teammateProfilesState = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState)],
});

export const teammateProfilesState_getById = selectorFamily({
  key: baseKey + 'getById',
  get: (teammateProfileId) => async ({ get }) => {
    const userToken = get(userState);
    const teammateProfiles = get(teammateProfilesState);
    return await Client.teammateProfiles.getById(teammateProfileId, userToken);
  },
});

export const teammateProfilesState_update = updateSelector(
  baseKey,
  teammateProfilesState,
);

export default teammateProfilesState;
