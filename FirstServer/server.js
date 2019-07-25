var http = require("http");

var PORT = 3002;

function handleRequest(request,response){
    response.end("It works monali.....:)"+request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT,function(){
    console.log("Server listening on port "+PORT);
});