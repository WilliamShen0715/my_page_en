function myModule(){
	var name = "bro";
	this.setName = function(myname){
		name = myname;
	};
	this.sayHello = function(){
		console.log('Hello, '+name);
	};
	this.talk = function(){
		person.talk();
	};
};
var person = {
	talk:function(){
		console.log('talking...')
	},
	listsen:function(){
		console.log('listening...')
	}
}
module.exports = myModule;