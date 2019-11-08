var http=require("http");
var server=http.createServer();
var route=require("./route");

route.bind(server);

server.listen(8090,function(){
    console.log("期待哦哦哦");
})