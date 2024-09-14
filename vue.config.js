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
    css: {
        loaderOptions: {
            scss: {
                sassOptions: {outputStyle: 'expanded'} // fix: 解决 element-ui 图标 icon 偶现乱码问题
            }
        }
    },
    configureWebpack: {
        optimization: {
            minimize: true,
            splitChunks: {
                chunks: 'all',
            },
        },
    },
    devServer:{
        open:true
    },

});