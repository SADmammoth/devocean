import localStorageSelector from '../helpers/selectors/localStorageSelector';

const baseKey = 'lastTaskViewState_';

const lastTaskViewState = localStorageSelector(baseKey);

export default lastTaskViewState;
