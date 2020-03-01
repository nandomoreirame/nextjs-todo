import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import reducers from './';

test('should reducers be a function', () => {
  expect(reducers).to.be.a('function');
});

test('should reducers returns an object', () => {
  const before = deepFreeze({});
  const actions = deepFreeze({ type: 'ANYTHING', payload: {} });
  expect(reducers(before, actions)).to.be.an('object');
});
