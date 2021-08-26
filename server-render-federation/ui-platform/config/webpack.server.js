const path = require('path');
const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

const commonsWebpack = require('./webpack.commons')

const serverConfig = {
  mode: 'development',

  // به وب‌پک میخوایم بگیم که ما یک bundle برای nodeJs میخوایم بسازیم نه مرورگر
  target: 'node',

  //    فایل اصلی که وب پک باید بگیره چی هست؟
  entry: path.resolve(__dirname, '../src/index.js'),

  // فایل خروجی رو که ساختم کجا بذارم؟
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "website1",
      library: { type: "commonjs-module" },
      filename: 'container.js',
      remotes: {
        website2: path.resolve(__dirname,
            '../../remoteServer/public/server/container.js'
        ),
      }
    })
  ]

};


module.exports = merge(serverConfig, commonsWebpack);
