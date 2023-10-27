const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');
const webpack = require('webpack');
const deps = require('../package.json').dependencies;
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// BundleAnalyzer는 Bundle 최적화 용도로 보통 저는 사용합니다.

module.exports = {
    entry: `${path.resolve(__dirname, '../src')}/main.ts`,
    devServer: {
        port: 8003,
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        hot: true,
    },
    output: {
        publicPath: 'auto',
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new webpack.ProvidePlugin({
            React: 'react',
        }),
        new ModuleFederationPlugin({
            name: 'footer',
            filename: 'remoteEntry.js',
            exposes: {
                './FooterComponent': './src/components/FooterComponent.tsx',
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                    eager: true,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: deps['react-dom'],
                    eager: true,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '../src/'),
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    },
};
