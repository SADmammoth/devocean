import _ from 'lodash';
import { atom, selector, selectorFamily } from 'recoil';

import Client from '../../helpers/services/Client';
import userState from './userState';

const baseKey = 'templatesState_';

const getState = (userToken) => Client.templates.get(userToken);
const getStateById = (userToken, id) => Client.templates.getById(id, userToken);

const templatesState = selector({
  key: baseKey,
  get: async ({ get }) => {
    const userToken = get(userState);
    return await getState(userToken);
  },
});

export const templatesState_getById = selectorFamily({
  key: baseKey,
  get: (id) => async ({ get }) => {
    const userToken = get(userState);
    return await getStateById(userToken, id);
  },
});

export default templatesState;
