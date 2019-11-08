var template=require("art-template");
template.defaults.root="./";
var db=require("../conn");

db.getdata(function(data){
    module.exports.data=template("index.html",{data:data});
})



