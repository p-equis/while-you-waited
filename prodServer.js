/*eslint no-console:0 */
var express = require('express')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic('dist/'))
var port = process.env.PORT || 3000;
app.listen(port)
console.log('listening on port', port);
