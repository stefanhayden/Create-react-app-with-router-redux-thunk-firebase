


export function isLoggedIn(state) {
  return Object.keys(state.user).length > 0;
}

export function isLoggedOut(state) {
  return Object.keys(state.user).length === 0;
}

export function user(state) {
  return state.user;
}
