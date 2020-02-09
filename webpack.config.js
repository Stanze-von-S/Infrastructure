const path = require('path');
module.exports = {
    entry: {main: './js/code.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: { loader: "babel-loader"},
            exclude: /node_modules/
                }
            ]
            }
};