// var fs = require("fs");
// fs.readFile('Input.txt', function (err, data) {
// if (err) {
// return console.error(err);
// }
// console.log("Asynchronous read: " + data.toString());
// });

var http = require ('http');
var fs = require ('fs');
http.createServer(function (req, res){
console.log("File is open at localhost:5000");
fs.readFile('Input.txt', function(err, data){
res.write(data);
return res.end();
});
}).listen(5000);