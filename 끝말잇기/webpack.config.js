const path = require('path');

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
            test: /\.jsx?/,
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
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output: {
        // 출력
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }
};