import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer, { INITIAL_STATE } from './reducers';

export const initializeStore = (preloadedState = INITIAL_STATE) =>
  createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware()));
