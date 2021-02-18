const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', // 실서비스: production
    devtool: 'eval', // 실서비스: hidden-source-map
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        // 입력
        app: ['./client'],
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR', 'last 2 chrome versions'], // browserslist
                        },
                        debug: true,
                    }],
                    '@babel/preset-react',
                    ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
            },
        }],
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],
    // 출력
    output: {
        // 실제 경로
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/', // app.use('/dist', express.static(__dirname, 'dist')
    },
    devServer: {
        publicPath: '/dist/',
        hot: true,
    }
};