import { atom, selector, selectorFamily } from "recoil";
import _ from "lodash";
import Client from "../../helpers/Client";

const baseKey = "templatesState_";

const getState = () => Client.templates.get();
const getStateById = (id) => Client.templates.getById(id);

const templatesState = selector({
  key: baseKey,
  get: async () => {
    return await getState();
  },
});

export const templatesState_getById = selectorFamily({
  key: baseKey,
  get: (id) => async () => {
    return await getStateById(id);
  },
});

export default templatesState;
