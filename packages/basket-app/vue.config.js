const {defineConfig} = require('@vue/cli-service');
const deps = require('./package.json').dependencies;
module.exports = defineConfig({
    publicPath: 'http://localhost:8002',
    chainWebpack: (config) => {
        config.optimization.delete('splitChunks');
        config.plugin('module-federation-plugin').use(require('webpack').container.ModuleFederationPlugin, [
            {
                name: 'basket',
                filename: 'remoteEntry.js',
                exposes: {
                    './BasketList': './src/components/BasketList.vue'
                },
                shared: {
                    ...deps,
                    vue: {singleton: true, eager: true, requiredVersion: deps.vue}
                }
            }
        ]);
    },
    devServer: {
        port: 8002 // 8001, 8002
    },
    transpileDependencies: true
});
