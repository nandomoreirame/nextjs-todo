/* eslint react/prop-types: "off" */
const TodoApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <style jsx global>{`
      html {
        box-sizing: border-box;
        font-size: 16px;
      }
      *,
      *::before,
      *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
      }
      body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell,
          Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 1rem;
      }
      html,
      body,
      #__next {
        height: 100vh;
        width: 100vw;
      }
      #__next {
        padding: 3.75rem;
        background-color: #f1f8fc;
        display: flex;
        justify-content: center;
      }
    `}</style>
  </>
);

export default TodoApp;
