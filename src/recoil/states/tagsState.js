import _ from 'lodash';
import { atom } from 'recoil';

import Client from '../../helpers/services/Client';
import serverStateSync from '../helpers/effects/serverStateSync';
import mergeSelector from '../helpers/selectors/mergeSelector';

const baseKey = 'tagsState_';

const getState = (userToken) => Client.tags.get(userToken);

const tagsStateAtom = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState)],
});

const tagsState = mergeSelector(baseKey, tagsStateAtom);

export default tagsState;
