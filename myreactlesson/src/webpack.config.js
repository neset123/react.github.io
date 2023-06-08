const webpack = require('webpack');

module.exports = {
  // Your webpack configuration...
  plugins: [
    // Other plugins...
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
