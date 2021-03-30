var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/')));
// app.use(express.static(__dirname + 'design'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'), {title: 'Food'});
});

app.listen(8080);
