import { atom, selector } from 'recoil';

import Client from '../../helpers/services/Client';
import serverStateSync from '../helpers/effects/serverStateSync';

const baseKey = 'navitemsState_';

const getState = (userToken) => Client.navitems.get(userToken);

const navitemsState = atom({
  key: baseKey,
  default: [],
  effects_UNSTABLE: [serverStateSync(getState)],
});

export const navitemsState_getShort = selector({
  key: baseKey + 'getShort',
  get: ({ get }) => {
    const navItems = get(navitemsState);

    return navItems.map(({ shortLabel, id, title, link }) => ({
      label: shortLabel,
      title,
      id,
      link,
    }));
  },
});

export const navitemsState_get = selector({
  key: baseKey + 'get',
  get: ({ get }) => {
    const navItems = get(navitemsState);

    return navItems
      .filter(({ onlyShort }) => !onlyShort)
      .map(({ label, id, title, link }) => ({
        label,
        title,
        id,
        link,
      }));
  },
});

export default navitemsState;
