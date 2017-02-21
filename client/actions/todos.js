import {
  MARK_AS_LOADING,
  MARK_AS_LOADED,
  POPULATE_TODOS
} from '../constants/ActionTypes';

export function markAsLoading() {
  return { type: MARK_AS_LOADING };
}

export function markAsLoaded() {
  return { type: MARK_AS_LOADED };
}

export function populateTodos(todos) {
  return {
    type: POPULATE_TODOS,
    todos: todos
  };
}

// this is where you combine them all together
export function fetchTodos() {
  return (dispatch) => {
    dispatch(markAsLoading());

    somePromiseForFetchingTodosFromServer()
      .then((todos) => {
        dispatch(populateTodos(todos))
      })
      .then(() => {
        dispatch(markAsLoaded());
      });
  };
}