import _ from 'lodash';
import { atom, selectorFamily, selector } from 'recoil';

import Client from '../../helpers/services/Client';
import serverStateSync from '../helpers/effects/serverStateSync';
import getPostState from '../helpers/getPostState';
import mergeSelector from '../helpers/selectors/mergeSelector';
import subtreeSelector from '../helpers/selectors/subtreeSelector';
import updateSelector from '../helpers/selectors/updateSelector';
import subteamsState from './subteamsState';
import userState, { userDataState } from './userState';

const baseKey = 'teammateProfilesState_';

const getState = (userToken) => Client.teammateProfiles.get(userToken);
const postState = (userToken, teammate) =>
  Client.teammateProfiles.post(teammate, userToken);
const patchState = (userToken, teammate) =>
  Client.teammateProfiles.patch(teammate.id, teammate, userToken);

export const teammateProfilesAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [
    serverStateSync(getState, getPostState(postState, patchState)),
  ],
});

const teammateProfilesState = mergeSelector(baseKey, teammateProfilesAtom);

export const teammateProfilesState_getById = selectorFamily({
  key: baseKey + 'getById',
  get: (teammateProfileId) => async ({ get }) => {
    const userToken = get(userState);

    if (!userToken || !teammateProfileId) return {};
    const teammateProfiles = get(teammateProfilesAtom);
    return await Client.teammateProfiles.getById(teammateProfileId, userToken);
  },
});

export const teammateProfilesState_current = selector({
  key: baseKey + 'current',
  get: async ({ get }) => {
    const userToken = get(userState);
    const user = get(userDataState);

    if (!userToken || !user || !user.id) return {};
    const teammateProfiles = get(teammateProfilesAtom);
    return await Client.teammateProfiles.getById(user.id, userToken);
  },
});

export const teammateProfilesState_update = updateSelector(
  baseKey,
  teammateProfilesAtom,
);

export const teammateProfilesState_getBySubteam = subtreeSelector(
  baseKey,
  subteamsState,
  teammateProfilesAtom,
  'teammates',
);

export default teammateProfilesState;
