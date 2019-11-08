var mysql=require("mysql");
var conn=mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"travel"
});

//  module.exports.getdata=function(call1){
// conn.connect(function(err){
//   if(err) console.log('数据库建立连接失败。');
//   else{
//       console.log('数据库建立连接成功。');
//       conn.query({sql:'select db_scenicinfo.*,db_city.* from db_scenicinfo inner join db_city on db_scenicinfo.cid=db_city.id',nestTables:'_'},function(err,data1){      
//       var sql1="select * from db_city";
//          conn.query(sql1,function(err,data){
//            if(err) console.log('查询数据失败。')
//             //  console.log(data1);
//             call1(data,data1);
//          })
     
// })
//   }
// })
//  }

module.exports.getdata=function(calls){
  var sql="select * from db_scenicinfo";
  conn.query(sql,function(err,data){
      calls(data);
  })
}

module.exports.getscenic=function(calls){
  var sql="select * from db_scenic";
  var sql1="select * from db_city where id=2"
  
  conn.query(sql1,function(err,data1){
    calls(data1);
  })
  conn.query(sql,function(err,data){
      calls(data);
  })
}
// var sql1="select * from db_city where id=2"
// conn.query(sql1,function(err,data){
//   console.log(data)
// })
// var sql="select * from db_scenicinfo";
// var data=conn.query(sql)





