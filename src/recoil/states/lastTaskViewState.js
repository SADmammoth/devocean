import localStorageSelector from "../helpers/localStorageSelector";

const baseKey = "lastTaskViewState_";

const lastTaskViewState = localStorageSelector(baseKey);

export default lastTaskViewState;
