const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      "@components": path.resolve(__dirname, './src/components'),
      "@containers": path.resolve(__dirname, './src/containers'),
      "@pages": path.resolve(__dirname, './src/pages'),
      "@styles": path.resolve(__dirname, './src/styles'),
      "@icons": path.resolve(__dirname, './public/assets/icons'),
      "@logos": path.resolve(__dirname, './public/assets/logos'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.html/,
        use: [
          {
            loader: 'html-loader',
          }
        ]
      },
      {
        test: /\.css/,
        use: [
            'style-loader',
            'css-loader',
        ]
      },
      {
       test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  devServer: {
    historyApiFallback: true,
    allowedHosts: path.join(__dirname, 'dist'),
    compress: true,
    port: 3010,
  }
}