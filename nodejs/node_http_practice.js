var http = require('http');

var server = http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<h1>node.js</h1>');
	res.end('<p>lalala</p>');
}).listen(3000);
server.on('connection',function(){
	console.log('connected');
});
server.on('request',function(req,res){
	console.log('request:'+req);
});