const {defineConfig} = require('@vue/cli-service');
// const deps = require('./package.json').dependencies;
module.exports = defineConfig({
    publicPath: 'auto',
    devServer: {
        port: 8000 // 8001, 8002
    },
    chainWebpack: (config) => {
        config.optimization.delete('splitChunks');
        config.plugin('module-federation-plugin').use(require('webpack').container.ModuleFederationPlugin, [
            {
                name: 'main',
                remotes: {
                    menu: 'menu@http://localhost:8001/remoteEntry.js',
                    basket: 'basket@http://localhost:8002/remoteEntry.js',
                    footer: 'footer@http://localhost:8003/remoteEntry.js'
                }
                // shared: {
                //     ...deps,
                //     vue: {singleton: true, eager: true},
                //     'vue-router': {singleton: true, eager: true}
                // }
            }
        ]);
    },
    transpileDependencies: true
});
