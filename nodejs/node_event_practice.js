//event.js
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('eventccc',function(){
	console.log('one second has gone.')
});
setTimeout(function(){
	event.emit('eventccc');
},1000);