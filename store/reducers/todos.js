import { TODO_ADD, TODO_COMPLETE, TODO_REMOVE } from './actions';
export const INITIAL_STATE = [];

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case TODO_ADD:
      return [...state, { id: payload.id, text: payload.text, completed: false }];

    case TODO_COMPLETE:
      return state.map(item =>
        item.id !== payload.id ? item : { ...item, completed: !item.completed },
      );

    case TODO_REMOVE:
      return state.filter(item => item.id !== payload.id);
  }

  return state;
};
