import _ from 'lodash';
import { atom, selectorFamily } from 'recoil';

import Client from '../../helpers/Client';
import serverStateSync from '../helpers/serverStateSync';
import updateSelector from '../helpers/updateSelector';

const baseKey = 'teammateProfilesState_';

const getState = (userToken) => Client.teammateProfiles.get(userToken);

const teammateProfilesState = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState)],
});

export const teammateProfilesState_getById = selectorFamily({
  key: baseKey + 'getById',
  get: (teammateProfileId) => ({ get }) => {
    const teammateProfiles = get(teammateProfilesState);
    return teammateProfiles.find(({ id }) => id === teammateProfileId);
  },
});

export const teammateProfilesState_update = updateSelector(
  baseKey,
  teammateProfilesState,
);

export default teammateProfilesState;
