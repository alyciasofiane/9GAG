var http = require('http');// importer le module http
let fs = require('fs');
var ServerHttp = http.createServer(function(req,res){ // on crée un server    
	fs.readFile('index.html',function(err,data){
		if(err) throw err
		res.writeHead(200, {
		'content-type': 'text/html; charset=utf-8'
	    });

	});   
	res.end(data);  
});
ServerHttp.listen(8080);// écouter le port 8080

