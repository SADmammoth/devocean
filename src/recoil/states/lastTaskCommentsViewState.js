import localStorageSelector from '../helpers/selectors/localStorageSelector';

const baseKey = 'lastTaskCommentsViewState_';

const lastTaskCommentsViewState = localStorageSelector(baseKey);

export default lastTaskCommentsViewState;
