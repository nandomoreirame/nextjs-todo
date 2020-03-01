import { expect } from 'chai';
import deepFreeze from 'deep-freeze';
import { TODO_ADD, TODO_COMPLETE, TODO_REMOVE, TODO_REMOVE_COMPLETED } from './actions';
import todos from './todos';

test('should todos be a function', () => {
  expect(todos).to.be.a('function');
});

test('should todos returns an array', () => {
  const before = deepFreeze([]);

  const actions = deepFreeze({ type: 'ANYTHING', payload: {} });

  expect(todos(before, actions)).to.be.an('array');
});

test('should add todo item', () => {
  const before = deepFreeze([]);

  const actions = deepFreeze({
    type: TODO_ADD,
    payload: { id: 1, text: 'hello' },
  });

  const after = [{ id: 1, text: 'hello', completed: false }];

  expect(todos(before, actions)).to.be.deep.equal(after);
});

test('should add a new todo item', () => {
  const before = deepFreeze([{ id: 1, text: 'foo', completed: false }]);

  const actions = deepFreeze({
    type: TODO_ADD,
    payload: { id: 2, text: 'bar' },
  });

  const after = [
    { id: 1, text: 'foo', completed: false },
    { id: 2, text: 'bar', completed: false },
  ];

  expect(todos(before, actions)).to.be.deep.equal(after);
});

test('should toggle todo item', () => {
  const before = deepFreeze([{ id: 1, text: 'foo', completed: false }]);

  const actions = deepFreeze({
    type: TODO_COMPLETE,
    payload: { id: 1 },
  });

  const after = [{ id: 1, text: 'foo', completed: true }];

  expect(todos(before, actions)).to.be.deep.equal(after);
});

test('should toggle other todo item', () => {
  const before = deepFreeze([
    { id: 1, text: 'foo', completed: false },
    { id: 2, text: 'bar', completed: false },
  ]);

  const actions = deepFreeze({
    type: TODO_COMPLETE,
    payload: { id: 2 },
  });

  const after = [
    { id: 1, text: 'foo', completed: false },
    { id: 2, text: 'bar', completed: true },
  ];

  expect(todos(before, actions)).to.be.deep.equal(after);
});

test('should return the last state when the action is unknown', () => {
  const before = deepFreeze([{ id: 1, text: 'foo', completed: false }]);

  const actions = deepFreeze({ type: 'UNKNOWN' });

  const after = [{ id: 1, text: 'foo', completed: false }];

  expect(todos(before, actions)).to.be.deep.equal(after);
});

test('should remove an item', () => {
  const before = deepFreeze([
    { id: 1, text: 'foo', completed: false },
    { id: 2, text: 'bar', completed: false },
  ]);

  const actions = deepFreeze({
    type: TODO_REMOVE,
    payload: { id: 2 },
  });

  const after = [{ id: 1, text: 'foo', completed: false }];

  expect(todos(before, actions)).to.be.deep.equal(after);
});

test('should remove all completed items', () => {
  const before = deepFreeze([
    { id: 1, text: 'foo', completed: true },
    { id: 2, text: 'bar', completed: true },
    { id: 3, text: 'nono', completed: false },
    { id: 4, text: 'baz', completed: false },
  ]);

  const actions = deepFreeze({
    type: TODO_REMOVE_COMPLETED,
  });

  const after = [
    { id: 3, text: 'nono', completed: false },
    { id: 4, text: 'baz', completed: false },
  ];

  expect(todos(before, actions)).to.be.deep.equal(after);
});
