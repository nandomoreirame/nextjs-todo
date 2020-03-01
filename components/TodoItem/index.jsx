import React from 'react';
import PropTypes from 'prop-types';
import styles from './item.module.css';

const TodoItem = ({ item, handleComplete, handleRemove }) => {
  return (
    <div className={`${styles.item} ${item.completed ? styles.itemCompleted : ''}`}>
      <label onClick={handleComplete(item.id)}>
        <span className="itemCheckbox" />
        {item.text}
      </label>
      <button className={styles.itemRemove} onClick={handleRemove(item.id)}>
        <small>&times;</small>
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
