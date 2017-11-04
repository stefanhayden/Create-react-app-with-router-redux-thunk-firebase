import * as authHelpers from 'helpers/auth';
import {
  SET_USER,
  PASSWORD_RESET,
} from 'actionTypes';

export function init() {
  return dispatch => {
    authHelpers.onAuthStateChanged().then(user => {
        if (user) {
          dispatch({ type: SET_USER, user: user.toJSON() });
        } else {
          dispatch({ type: SET_USER, user: {} });
        }
    });
  }
}

export function signup(email, pw) {
  return dispatch => {
    return authHelpers.signup(email, pw)
    .then(user => {
      dispatch({ type: SET_USER, user: user.toJSON() });
    })
  }
}

export function login(email, password) {
  return dispatch => {
    return authHelpers.login(email, password).then(user => {
      console.log(user)
      dispatch({ type: SET_USER, user: user.toJSON() });
    });
  }
}

export function logout() {
  return dispatch => {
    return authHelpers.logout().then(() => {
      dispatch({ type: SET_USER, user: {} });
    })
  }
}

export function resetPassword(email) {
  return dispatch => {
    return authHelpers.resetPassword(email).then(() => {
      dispatch({ type: PASSWORD_RESET });
    });
  }
}
