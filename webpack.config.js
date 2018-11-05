module.exports ={
  entry:'./frontend/src/index.js',
  output:{
    path:__dirname+'/frontend/public',
    filename:'bundle.js'
  },
  module:{
    rules:[
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use:[
        {
          loader:'babel-loader',
        options:{
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
      ],
     }
  ]
}
}
