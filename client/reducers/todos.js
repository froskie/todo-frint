import * as actions from '../constants/ActionTypes'

const initialState = {
  current: null,
  list: [],
};

export default function todos(state = initialState, action) {

  switch(action.type) {
    case actions.EDIT_TODO: {
      return {
        ...state,
        current: state.list.find(t => t.$loki === action.data)
      };
    }
    case actions.UPDATED_TODO: {
      return {
        list: state.list.map(t => {
          if (t.$loki === action.data.$loki) return action.data;
          return t;
        }),
        current: null
      };
    }
    case actions.ADDED_TODO: {
      return {
        ...state,
        list: [...state.list, action.data]
      };
    }
    case actions.LOADED_TODOS: {
      return {
        ...state,
        list: action.data.slice(0)
      };
    }
    case actions.REMOVED_TODO : {
      return {
        ...state,
        list: state.list.filter(t => t.$loki !== action.data)
      };
    }
    default: {
      return state;
    }
  }

  return state;
}