var fs=require("fs");
var yewu=require("./route/beijing");
var index=require('./route/index')
module.exports.bind=function(server){
    server.on("request",function(req,res){
    if(req.url=="/html/beijing.html"){
        res.end(yewu.data);
    }else if(req.url=="/index.html"){
        res.end(index.data)
    }
    else{
        fs.readFile("."+req.url,function(err,data){
            res.end(data);
        })
    }
})
}
