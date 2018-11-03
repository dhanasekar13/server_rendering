var express       = require('express')
var app           = express()
var React         = require('react')
var ReactDOMServer= require('react-dom/server')
var Component     = require('./Component.jsx')

app.get('/',(req,resp)=>{
  var html = ReactDOMServer.renderToString(
    React.createElement(Component)
  )
  resp.send(html)
})

app.listen(5000,()=>{
  console.log('The server is running in 5000')
})
