import { useSelector, shallowEqual } from 'react-redux';

export const useTodos = () => {
  return useSelector(state => ({ items: state.items }), shallowEqual);
};
