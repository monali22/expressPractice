var http = require("http");
var fs = require("fs");

var PORT=8080;

function handleRequest(req,res){
    fs.readFile(__dirname+"/index.html",function(err,data){
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(data);
    });
}

var server = http.createServer(handleRequest);

server.listen(PORT,function(){
    console.log("Listening on port"+PORT);
});