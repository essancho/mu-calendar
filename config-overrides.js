/* eslint-disable */
// const packageJsonVersion = require('./package').version;
// const devMode = process.env.NODE_ENV === 'development';
// const prodMode = process.env.NODE_ENV === 'production';
// const localMode = process.env.REACT_APP_ENV === 'local';
// const appEnv = process.env.REACT_APP_ENV;

const { override } = require('customize-cra');

const addIgnoreSourcemapsloaderWarnings = (config) => {
  config.ignoreWarnings = [
    // Ignore warnings raised by source-map-loader.
    // some third party packages may ship miss-configured sourcemaps, that interrupts the build
    // See: https://github.com/facebook/create-react-app/discussions/11278#discussioncomment-1780169
    /**
     *
     * @param {import('webpack').WebpackError} warning
     * @returns {boolean}
     */
    function ignoreSourcemapsloaderWarnings(warning) {
      return (
        warning.module &&
        warning.module.resource.includes('node_modules') &&
        warning.details &&
        warning.details.includes('source-map-loader')
      );
    },
  ];
  return config;
};

module.exports = override(addIgnoreSourcemapsloaderWarnings);
