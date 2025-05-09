// var event=require('events');
// var myEmitter = new event.EventEmitter();
// myEmitter.once('anEvent', function(msg){
//     console.log(msg);
//     I});
// myEmitter.emit('anEvent','Event emitter');

// var EventEmitter=require('events');
// var eventEmitters1=new EventEmitter();
// var eventEmitters2=new EventEmitter();


const EventEmitter = require('events');
var eventEmitter1 = new EventEmitter();
var eventEmitter2 = new EventEmitter();
console.log("Default max listener for eventEmitter1 is: ",
eventEmitter1.getMaxListeners());
console.log("Default max listener for eventEmitter2 is: ",
eventEmitter2.getMaxListeners());
EventEmitter.defaultMaxListeners = 2;
console.log("Default max listener for eventEmitter1 is: ",
eventEmitter1.getMaxListeners());
console.log("Default max listener for eventEmitter2 is: ",
eventEmitter2.getMaxListeners());
eventEmitter1.setMaxListeners(5);
console.log("Default max listener for eventEmitter1 is: ",
eventEmitter1.getMaxListeners());
console.log("Default max listener for eventEmitter2 is: ",
eventEmitter2.getMaxListeners());
var fun1 = (msg) =>
{
console.log("Message from fun1: " + msg);
};
var fun2 = (msg) =>
{
console.log("Message from fun2: " + msg);
};
for(var i = 0; i < 5; i++)
{
eventEmitter1.addListener('myEvent1', fun1)
}
for(var i = 0; i < 2; i++)
{
eventEmitter2.addListener('myEvent2', fun2)
}
eventEmitter2.emit('myEvent2', 'Event2 occurred');
//eventEmitter1.removeAllListeners('myEvent1');
eventEmitter1.emit('myEvent1', 'Event1 occurred');
