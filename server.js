var express = require('express');
var reload = require('reload');
var app = express();
var path = require('path');


app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

var server = app.listen(3000,function(){
    console.log('server started running via port 3000')
});

reload(server,app)