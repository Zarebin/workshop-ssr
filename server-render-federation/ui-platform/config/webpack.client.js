const path = require("path");
const merge = require('webpack-merge').merge;
const deps = require('../../package.json').dependencies
const ModuleFederationPlugin =
    require("webpack").container.ModuleFederationPlugin;

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
    plugins: [
        new ModuleFederationPlugin({
            name: "website1",
            filename: "container.js",
            remotes: {
                website2: "website2@http://localhost:3001/static/container.js",
            },

            shared: {
                ...deps,
                react: {
                    eager: true,
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    eager: true,
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                }
            }
        }),
    ],

}

module.exports = merge(clientConfigs, commonsConfig);
