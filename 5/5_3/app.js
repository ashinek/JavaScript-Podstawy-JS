var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200);
	res.end('Serwer działą ok');
}).listen(3000);