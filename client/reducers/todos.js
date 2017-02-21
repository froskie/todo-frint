import * as actions from '../constants/ActionTypes'

const initialState = [];

export default function todos(state = initialState, action) {

  switch(action.type) {
    case actions.ADDED_TODO: {
      return [...state, action.data];
    }
    case actions.LOADED_TODOS: {
      return action.data.slice(0);
    }
    case actions.REMOVED_TODO : {
      return state.filter(t => t.$loki !== action.data);
    }
    default: {
      return state;
    }
  }

  return state;
}