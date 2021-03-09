var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
	if(req.url=='/login'){
		switch(req.method){
			case 'GET':
				fs.createReadStream("login.html").pipe(res);
				break;
			case 'POST':
				console.log('this request is post');
				break;
			default:
				console.log('other request');
		}
	}else{
		res.writeHead(200,{'Location':'/login','Context-type':'text:html'});
		res.end();
		console.log("not correct url");
	}
});
server.listen(3000);