var http = require("http");

var PORT = 7000;

function handleRequest(req,res){

    var path = req.url;

    switch(path){
        case '/': return displayHome(path,req,res);

        case '/portfolio': return displayPortFolio(path,req,res);

        default: return display404(path,req,res);

    }
}

function displayHome(url,req,res){
    var myHTML = "<html>"+"<body>"
                +"<h1>HOME</h1>"+
                "<a href='/portfolio'>PORTFOLIO</a>"+
                "</body>"+"</html>";

    res.writeHead(200,{"Content-type":"text/html"});
    res.end(myHTML);            
}

function displayPortFolio(url,req,res){
    var myHTML = "<html>"+"<body>"+
                 "<h1>Portfolio</h1>"+
                 "<a href='/'>HOME</a>"+
                 "</body>"+"</html>";

    res.writeHead(200,{"Content-type":"text-html"});
    res.end(myHTML);             
}

function display404(url,req,res){
    var myHTML="<html>"+"<body>"+
                "<h1>The page you were looking for "+url+" not found</h1>"+
                "</body>"+"</html>";
                
    res.writeHead(404,{"Content-type":"text/html"});
    res.end(myHTML);            
    }

    var server = http.createServer(handleRequest);

    server.listen(PORT,function(){
        console.log("Server listnng on port "+PORT);
    });