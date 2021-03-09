var util = require('util');

function father(){
	this.name = "father";
	this.other = "ccc";
}
function son(){
	this.name = "son";
}

father.prototype.showName = function(){
	console.log("My name is "+this.name);
};
//inherits
util.inherits(son,father);

var oFather = new father();
oFather.showName();
var oSon = new son();
oSon.showName();
//inspect
console.log(util.inspect(father));
console.log(util.inspect(son,true));