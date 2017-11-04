import { combineReducers } from 'redux';
import user from './user';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const reducers = combineReducers({
  user,
  todos,
  visibilityFilter,
});

export default reducers;
