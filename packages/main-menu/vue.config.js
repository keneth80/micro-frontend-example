const {defineConfig} = require('@vue/cli-service');
const deps = require('./package.json').dependencies;
module.exports = defineConfig({
    devServer: {
        port: 8001 // 8001, 8002
    },
    publicPath: 'http://localhost:8001',
    chainWebpack: (config) => {
        config.optimization.delete('splitChunks');
        config.plugin('module-federation-plugin').use(require('webpack').container.ModuleFederationPlugin, [
            {
                name: 'menu',
                filename: 'remoteEntry.js',
                exposes: {
                    './ChickenList': './src/components/ChickenList.vue'
                },
                shared: {
                    ...deps,
                    vue: {singleton: true, eager: true, requiredVersion: deps.vue}
                }
            }
        ]);
    },
    transpileDependencies: true
});
