import {
  SHOW_ALL_TODOS,
  SET_VISIBILITY_FILTER,
} from 'actionTypes';

const visibilityFilter = (state = SHOW_ALL_TODOS, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
