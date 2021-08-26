const path = require("path");
const merge = require('webpack-merge').merge;

const commonsConfig = require('./webpack.commons');

const clientConfigs = {
    mode: 'development',

    //    فایل اصلی که وب پک باید بگیره چی هست؟
    entry: path.resolve(__dirname, '../src/client/client.js'),

    // فایل خروجی رو که ساختم کجا بذارم؟
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../public')
    },
}

module.exports = merge(clientConfigs, commonsConfig)