const { resolve } = require('path');

/* eslint no-undef: "off" */
// eslint-disable-next-line
module.exports = api => {
  api.cache(true);

  return {
    presets: ['next/babel'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathSuffix: resolve(__dirname),
              rootPathPrefix: '~',
            },
          ],
        },
      ],
    ],
  };
};
