var express = require('express')

var app = express()
const path = require('path')

app.use(express.static('static'))
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/app',express.static(path.join(__dirname, 'public/views/index.html')))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
