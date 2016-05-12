var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
//http.createServer(function (request, response) {
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    response.end('Hello World , by Anna. ');
//}).listen(2002);
//console.log('Server running at http://127.0.0.1:2002/');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.use(express.static(path.join(__dirname, 'interface')));
app.use(express.static(path.join(__dirname, 'app')));
app.get('/' , function(req, res){
    //res.send('xxxxxddfdfdfd');
    res.sendFile(path.join(__dirname, 'views/index.html'));
    //res.render('index.html')
})

app.listen(2001,function(){
    console.log('success');
})