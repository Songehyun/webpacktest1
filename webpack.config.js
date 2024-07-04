const path = require('path');

module.exports = {
  entry: './dist/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'entry.bundle.js',
  },
};
