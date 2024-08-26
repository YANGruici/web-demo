const { defineConfig } = require('@vue/cli-service');
const path = require('path');
const webpack = require('webpack');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/web-demo/' : '/',
  outputDir: 'dist',
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias.set('@', path.resolve(__dirname, 'src'));
    config.plugin('define')
        .use(webpack.DefinePlugin, [{
          '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': JSON.stringify(false)
        }]);
  },


});