#NPM module & typescript
```
npm init -y
tsc --init
```
# typescript webpack
https://webpack.js.org/guides/typescript/
```shell script
npm install --save-dev typescript ts-loader
```


webpack.config.js:
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

# typescript
I used @paulolramos's script: https://github.com/paulolramos/eslint-prettier-airbnb-react to setup eslint and prettier. Also this is a great article about eslint:
https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a 


# sass
https://webpack.js.org/loaders/sass-loader/

```shell script
npm install sass-loader sass webpack --save-dev
```

webpack.config.js

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
```

