const path = require('path');
const webpack = require('webpack');
module.exports={
    entry:'/home/shri/tweeter_project/client/index.js',
    output:{
       path: __dirname + '/dist',
       filename:'bundle.js'
    },
    devServer:{
      inline:true,
      contentBase:'./App',
      port:8000
    },
    module: {
      rules:[
        {
          test:/\.jsx?/,
      exclude: /node_modules/,
      use: 'babel-loader'
    },
    {
      test:/\.(gif|svg|jpg|png)$/,
      use:'url-loader'
    },
    {
      test:/\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
      loader: 'file-loader?name=[name].[ext]'
    }
      ]
    }
}
