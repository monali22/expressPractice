var http = require("http");
var fs = require("fs");

var PORT=8080;

function handleRequest(req,res){

    var path = req.url;

    switch(path){
        case '/' : return display(path,req,res,'/index.html');

        case '/food': return display(path,req,res,'/favoriteFood.html');

        case '/movie': return display(path,req,res,'/favoriteMovies.html');

        case '/language': return display(path,req,res,'/favoriteLanguage.html');

    }
}

function display(url,req,res,name){
    fs.readFile(__dirname+name,function(err,data){
        res.writeHead(200,{"Content-type":"text/html"});
        res.end(data);
    })
}

var server = http.createServer(handleRequest);

server.listen(PORT,function(){
    console.log("Listeninh on port "+PORT);
});
 