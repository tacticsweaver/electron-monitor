const path = require('path');
const nodeExternals = require('webpack-node-externals');
    
module.exports = (env) => {
  console.log(env)  
  const config = {
    mode: env.WEBPACK_WATCH ? 'development' : 'production',
    entry: './src/main.js',
    target: 'electron-main',
    externals: [ nodeExternals() ],
    module: {
      rules: [
        
      ]
    },
    resolve: {
      extensions: ['.js']
    },
    output: {
      path: path.resolve(__dirname),
      filename: 'main.js'
    }
  }

  return config;
}

