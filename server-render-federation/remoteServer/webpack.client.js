var path = require("path");
var webpack = require("webpack");
const {dependencies: deps} = require("../package.json");
// const plugins = require("./plugins");
const ModuleFederationPlugin =
  require("webpack").container.ModuleFederationPlugin;

var serverConfig = {
  entry: path.resolve(__dirname, "client.js"),
  // target: "node",
  output: {
    path: path.resolve(__dirname, "public/client"),
    filename: "bundle.js",
    publicPath: "auto",
  },
  externals: ["enhanced-resolve"],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  optimization: {
    minimize: false,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|GeneralJS|Global)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    // ...plugins.client,
    new ModuleFederationPlugin({
      name: "website2",
      library: { type: "var", name: "website2" },
      filename: "container.js",
      exposes: {
        "./SharedComponent": "./remoteServer/SharedComponent",
      },
      // remotes: {
      //   website1: "website1@http://localhost:3001/static/container.js",
      // },
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
  // plugins: [
  //   new ModuleFederationPlugin({
  //     name: "website2",
  //     library: { type: "var", name: "website2" },
  //     filename: "container.js",
  //
  //     exposes: {
  //       "./SharedComponent": "./remoteServer/SharedComponent",
  //     },
  //     shardraed: ["react", "react-dom"],
  //   }),
  // ],
};

module.exports = [serverConfig];
