var MongoClient = require('mongodb').MongoClient;
//create mydb as new database
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,{ useUnifiedTopology: true },function(err, client) {
  if (err) throw err;
  
  console.log("Database created!");
  client.close();

});