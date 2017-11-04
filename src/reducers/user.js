import {
  SET_USER,
  UPDATE_USER,
} from 'actionTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return action.user;
    case UPDATE_USER:
      return Object.assign({}, state, action.user);
    default:
      return state
  }
}

export default user;
