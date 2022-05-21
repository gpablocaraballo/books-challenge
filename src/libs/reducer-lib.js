import { useReducer } from 'react';
import { APP_ACTIONS } from './reducerAction-lib';

const appDefaultState = {
  sortered_books: null,
  books: null,
  dirtyOrder: false,
};

function appReducer(state, action) {
  switch (action.type) {
    case APP_ACTIONS.RESET_BOOK_LIST:
      return { ...state, books: action.data, sortered_books: action.data };
    case APP_ACTIONS.SET_BOOK_LIST:
      return { ...state, sortered_books: action.data };
    case APP_ACTIONS.SET_DIRTY_ORDER:
      return { ...state, dirtyOrder: action.data };
    default:
      throw new Error();
  }
}

export function useAppReducer() {
  return useReducer(appReducer, appDefaultState);
}

export default { useAppReducer };
