import React from 'react';
import PropTypes from 'prop-types';
import styles from './list.module.css';

const TodoList = ({ title, children }) => {
  return (
    <>
      {children && (
        <section className={styles.section}>
          {title && <h4 className={styles.listTitle}>{title}</h4>}
          <div className={styles.list}>{children}</div>
        </section>
      )}
    </>
  );
};

TodoList.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default TodoList;
