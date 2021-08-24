const path = require('path');
const { merge } = require('webpack-merge')

const commonsWebpack = require('./webpack.commons')

const serverConfig = {
  mode: 'development',

  // به وب‌پک میخوایم بگیم که ما یک bundle برای nodeJs میخوایم بسازیم نه مرورگر
  target: 'node',

  //    فایل اصلی که وب پک باید بگیره چی هست؟
  entry: './src/index.js',

  // فایل خروجی رو که ساختم کجا بذارم؟
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
};


module.exports = merge(serverConfig, commonsWebpack);
