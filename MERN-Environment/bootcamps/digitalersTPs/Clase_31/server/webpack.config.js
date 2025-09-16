require('dotenv-flow').config();
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const glob = require('glob');

const entry = glob.sync('./src/**/*.js').reduce( (accum, filename) => ({ ...accum, [filename.replace('src/', './src/')]: filename.replace('src/', './src/') }), {});

module.exports = {
  mode: process.env.NODE_ENV === 'local' ? 'development': 'production',
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]',
    library: {
      type: 'commonjs',
    },
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  target: 'node',
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};
