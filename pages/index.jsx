import Head from 'next/head';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { withRedux, TODO_ADD, TODO_REMOVE, TODO_COMPLETE } from '~/store';
import { useTodos } from '~/store/hooks';
import Form from '~/components/TodoForm';
import List from '~/components/TodoList';
import Item from '~/components/TodoItem';

const HomeTodoApp = () => {
  const { items } = useTodos();
  const dispatch = useDispatch();

  const handleAddTodos = e => {
    e.preventDefault();
    const { value } = e.target.todo;
    if (value) {
      dispatch({ type: TODO_ADD, payload: { id: uuidv4(), text: value } });
      e.target.todo.value = '';
    }
  };

  const handleRemoveItem = id => e => {
    e.preventDefault();
    dispatch({ type: TODO_REMOVE, payload: { id } });
  };

  const handleCompleteItem = id => e => {
    e.preventDefault();
    dispatch({ type: TODO_COMPLETE, payload: { id } });
  };

  return (
    <>
      <Head>
        <title>Nextjs - Todo App</title>
      </Head>
      <main className="container">
        <List title="Shopping list">
          {items.map(item => (
            <Item
              key={item.id}
              item={item}
              handleComplete={handleCompleteItem}
              handleRemove={handleRemoveItem}
            />
          ))}
          <Form handleSubmit={handleAddTodos} />
        </List>
      </main>
    </>
  );
};

HomeTodoApp.getInitialProps = ({ reduxStore }) => {
  const firstItemId = uuidv4();
  const items = [
    { id: firstItemId, text: 'Milk' },
    { id: uuidv4(), text: 'Bean' },
    { id: uuidv4(), text: 'Rice' },
    { id: uuidv4(), text: 'Bread' },
  ];

  // map to add items
  items.map(payload => reduxStore.dispatch({ type: TODO_ADD, payload }));

  // completing the first item
  reduxStore.dispatch({ type: TODO_COMPLETE, payload: { id: firstItemId } });

  return {};
};

export default withRedux(HomeTodoApp);
