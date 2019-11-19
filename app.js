var express = require('express');
var app = express();

// Routes
app.get('/', function(req, res) {
  res.send('Welcome to jenkins UI Test');
});

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);
