import React from 'react';
import PropTypes from 'prop-types';
import styles from './form.module.css';

const TodoForm = ({ handleSubmit }) => (
  <form className={styles.form} onSubmit={handleSubmit}>
    <input className={styles.formInput} type="text" name="todo" placeholder="Item list" />
  </form>
);

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default TodoForm;
