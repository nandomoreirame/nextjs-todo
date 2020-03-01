import React from 'react';
import PropTypes from 'prop-types';
import formStyles from './form.module.css';

const TodoForm = ({ handleSubmit }) => (
  <form className={formStyles.root} onSubmit={handleSubmit}>
    <input className={formStyles.input} type="text" name="todo" placeholder="Add a new item" />
  </form>
);

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default TodoForm;
