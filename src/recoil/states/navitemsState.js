import { atom, selector } from 'recoil';

import Client from '../../helpers/Client';
import serverStateSync from '../helpers/serverStateSync';

const baseKey = 'navitemsState_';

const getState = (userToken) => Client.navitems.get(userToken);

const navitemsState = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState)],
});

export default navitemsState;
