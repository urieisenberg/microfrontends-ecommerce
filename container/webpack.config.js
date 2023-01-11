const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        // remotes lists project that the container can search to get additional code
        // products: load the file at the listed URL if anything in container has an import
        products: 'products@http://localhost:8081/remoteEntry.js', //products related to the 'name' property in the procuts webpack config file and the url is for the remoteEntry file
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
