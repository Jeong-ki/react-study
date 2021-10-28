const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실 서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx']  // entry에서 확장자 생략 가능
  },
  
  entry: {
    app: ['./client'],
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 5% in KR', 'last 2 chrome versions'],
            },
          }], '@babel/preset-react'
        ],
        plugins: [
          'react-refresh/babel',
        ]
      },
    }],
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  }, // 출력
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  },
};