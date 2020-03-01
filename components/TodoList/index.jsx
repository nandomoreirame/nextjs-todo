import React from 'react';
import PropTypes from 'prop-types';
import listStyles from './list.module.css';

const TodoList = ({ title, children, handlerRemoveCompleted }) => {
  return (
    <>
      {children && (
        <section className={listStyles.root}>
          {title && <h4 className={listStyles.title}>{title}</h4>}
          <div className={listStyles.items}>{children}</div>
          <a href="#" role="button" className={listStyles.remove} onClick={handlerRemoveCompleted}>
            Remove completed items
          </a>
        </section>
      )}
    </>
  );
};

TodoList.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  handlerRemoveCompleted: PropTypes.func.isRequired,
};

export default TodoList;
