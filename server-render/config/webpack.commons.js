module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: [ /\.gif$/, /\.svg?$/],
        loader: require.resolve('url-loader'),
      },
      {
        loader: require.resolve('file-loader'),
        exclude: [/\.(js|mjs|jsx|ts|tsx|svg|gif)$/, /\.html$/, /\.json$/],
        options: {
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
    ],
  },
};
