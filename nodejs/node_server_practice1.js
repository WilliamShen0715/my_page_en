var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
	if(req.url=='/'){
//顯示清單
		var fileList = fs.readdirSync('./');
		res.writeHead(200,{"Context-type":"text/plain"});
		res.end(fileList.toString());
	}else{
		var path = req.url;
		fs.readFile('.'+path,function(err,data){
			if(err){
				console.log(err);
				res.end('Internal Error');
				throw err;
			}else{
				res.writeHead(200,{"Context-type":"text/plain"});
				res.end(data);
			}
		});
	}
});
server.listen(3000);
process.on('uncaughtException',function(){
	console.log('got error');
});