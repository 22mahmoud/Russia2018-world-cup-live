import { combineReducers } from 'redux';

import todayMatches from './todayMatches';

const rootReducers = combineReducers({
  todayMatches,
});

export default rootReducers;
