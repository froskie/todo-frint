import * as actions from '../constants/ActionTypes';

const BASE_URL = 'http://localhost:9001';

export function added(data) {
  return { type: actions.ADDED_TODO, data };
}

export function removed(id) {
  return { type: actions.REMOVED_TODO, data: id };
}

export function add(data) {
  return dispatch => {
    fetch(BASE_URL + '/tasks', {
      method: 'POST',
      body: JSON.stringify({
        title: data.title,
        description: data.description
      }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
    .then(res => res.json())
    .then(res => { dispatch(added(res)); });
  };
}

export function remove(id) {
  return dispatch => {
    fetch(BASE_URL + '/tasks/' + id, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(res => { dispatch(removed(id)); });
  };
}

export function loaded(data) {
  return { type: actions.LOADED_TODOS, data };
}

export function list() {
  return dispatch => {
    fetch(BASE_URL + '/tasks')
    .then(res => res.json())
    .then(res => { dispatch(loaded(res)); });
  };
}