import { selector } from "recoil";
import Client from "../../helpers/Client";

const baseKey = "navitemsState_";

const navitemsState = selector({
  key: baseKey,
  get: () => Client.getNavitems(),
});

export default navitemsState;
