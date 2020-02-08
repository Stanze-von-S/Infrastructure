const path = require('path');
module.exports = {
    entry: {main: './js/code.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    }

}