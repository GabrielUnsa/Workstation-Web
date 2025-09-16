require('dotenv-flow').config();
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const glob = require('glob');

// const { NODE_ENV } = process.env;

const entry = glob.sync('./src/**/*.js').reduce((accum, filename) => ({ ...accum, [filename.replace('./src/', './')]: filename }), {});

module.exports = {
  mode: 'production', // NODE_ENV !== 'local' ? 'production' : 'development',
  entry, // : {
  // server: './src/server.js',
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
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
        /* use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
            ],
          },
        }, */
      },
    ],
  },
};
