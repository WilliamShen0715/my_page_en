//fs.js (not sync and sync)
//readfile
var fs = require('fs');
fs.readFile('aaa.txt','utf-8',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});//(哪個file,編碼,callback)
console.log('this is not sync');

var data = fs.readFileSync('aaa.txt','utf-8');
console.log(data);
console.log("this is sync");
//writefile
fs.writeFile('aaa.txt','Try to write somthing.','utf-8',function(err){
	if(err){
		console.log(err);
	}
});
//file state
fs.stat('aaa.txt',function(err,result){
	if(err){
		console.log(err);
	}else{
		console.log(result);
	}
});