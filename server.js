const { spawn } = require('child_process')
const path = require('path')
spawn('./node_modules/.bin/webpack-dev-server', ['--hot', `--config=${path.resolve(__dirname + '/webpack.config.js')}`])
