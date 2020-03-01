import { combineReducers } from 'redux';
import items, { INITIAL_STATE as ITEMS_INITIAL_STATE } from './todos';

export const INITIAL_STATE = {
  items: ITEMS_INITIAL_STATE,
};

export * from './actions';

export default combineReducers({ items });
