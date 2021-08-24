
module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ],
        },
      },
      //   {
      //     loader: require.resolve('file-loader'),
      //     exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
      //     options: {
      //       name: 'static/media/[name].[hash:8].[ext]',
      //     },
      //   },
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
      { test: /\.(scss|css)$/, loader: "ignore-loader" }
    ],
  },
};
