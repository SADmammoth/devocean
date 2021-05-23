import _ from 'lodash';
import { atom, selectorFamily } from 'recoil';

import Client from '../../helpers/services/Client';
import serverStateSync from '../helpers/effects/serverStateSync';
import getPostState from '../helpers/getPostState';
import mergeSelector from '../helpers/selectors/mergeSelector';
import updateSelector from '../helpers/selectors/updateSelector';
import userState from './userState';

const baseKey = 'subteamsState_';

const getState = (userToken) => Client.subteams.get(userToken);
const postState = (userToken, teammate) =>
  Client.subteams.post(teammate, userToken);

const subteamsAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState /*, getPostState(postState)*/)],
});

const subteamsState = mergeSelector(baseKey, subteamsAtom);

export default subteamsState;
