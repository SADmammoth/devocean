import localStorageSelector from "../helpers/localStorageSelector";

const baseKey = "lastTaskCommentsViewState_";

const lastTaskCommentsViewState = localStorageSelector(baseKey);

export default lastTaskCommentsViewState;
