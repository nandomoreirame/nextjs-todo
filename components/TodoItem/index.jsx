import React from 'react';
import PropTypes from 'prop-types';
import itemStyles from './item.module.css';

const TodoItem = ({ item, handleComplete, handleRemove }) => {
  return (
    <div
      className={`${itemStyles.root} ${item.completed ? itemStyles.completed : ''}`}
      onClick={handleComplete(item.id)}
    >
      <label className={itemStyles.label}>
        <span className={itemStyles.checkbox} />
        {item.text}
      </label>
      <button className={itemStyles.remove} onClick={handleRemove(item.id)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14.72" height="16.21">
          <path d="M14.068 2.98H.655a.655.655 0 100 1.31h13.413a.655.655 0 100-1.31z" />
          <path d="M12.575 2.98a.655.655 0 00-.655.655v10.43a.836.836 0 01-.835.835h-7.45a.836.836 0 01-.835-.835V3.635a.655.655 0 10-1.31 0v10.43a2.147 2.147 0 002.145 2.145h7.45a2.147 2.147 0 002.145-2.145V3.635a.655.655 0 00-.655-.655z" />
          <path d="M8.85 0H5.87a2.147 2.147 0 00-2.145 2.145v1.49a.655.655 0 001.31 0v-1.49a.836.836 0 01.835-.835h2.98a.836.836 0 01.835.835v1.49a.655.655 0 101.31 0v-1.49A2.147 2.147 0 008.85 0zM5.87 6.705a.655.655 0 00-.655.655v4.47a.655.655 0 001.31 0V7.36a.655.655 0 00-.655-.655zM8.85 6.705a.655.655 0 00-.655.655v4.47a.655.655 0 001.31 0V7.36a.655.655 0 00-.655-.655z" />
        </svg>
      </button>
    </div>
  );
};

TodoItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleComplete: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default TodoItem;
