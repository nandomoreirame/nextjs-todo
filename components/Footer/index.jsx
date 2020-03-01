import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <strong>Shopping List</strong> is an application made for study purposes, using{' '}
        <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>
        ,{' '}
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          React.js
        </a>
        ,{' '}
        <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
          Redux
        </a>{' '}
        and hosted at{' '}
        <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
          Netlify
        </a>
        .
      </p>
      <p>
        The source code can be found at{' '}
        <a href="https://nandomoreira.dev/" target="_blank" rel="noopener noreferrer">
          Github
        </a>
        created by{' '}
        <a href="https://nandomoreira.dev/" target="_blank" rel="noopener noreferrer">
          Fernando Moreira
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
