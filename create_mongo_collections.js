var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, client) {
  if (err) throw err;
  var dbo = client.db('mydb');
  console.log("Database created!");
  dbo.createCollection('customers',(err,res)=>{
    if (err) throw err;
    console.log("Collection created!");
    client.close();
  });
});