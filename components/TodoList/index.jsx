import React from 'react';
import PropTypes from 'prop-types';
import styles from './list.module.css';

const TodoList = ({ children }) => {
  return (
    <>
      {children && (
        <>
          <h4>Todos</h4>
          <div className={styles.items}>{children}</div>
        </>
      )}
    </>
  );
};

TodoList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TodoList;
