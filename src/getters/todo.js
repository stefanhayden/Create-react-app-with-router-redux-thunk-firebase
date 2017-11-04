import {
  SHOW_ALL_TODOS,
  SHOW_COMPLETED_TODOS,
  SHOW_ACTIVE_TODOS,
} from 'actionTypes';

const DEFAULT = [];

export const getVisibleTodos = state => {
  switch (state.visibilityFilter) {
    case SHOW_ALL_TODOS:
      return state.todos
    case SHOW_COMPLETED_TODOS:
      return state.todos.filter(t => t.completed)
    case SHOW_ACTIVE_TODOS:
      return state.todos.filter(t => !t.completed)
    default:
      return DEFAULT;
  }
}
