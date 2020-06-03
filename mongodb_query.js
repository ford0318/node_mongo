const MongoClient = require('mongodb').MongoClient;
const dburi ='mongodb://localhost:27017/'

MongoClient.connect(dburi,(err,client) => {
    if (err) throw err;
    var dbo = client.db("mydb");
    var query = {};
    dbo.collection("customers").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      client.close();
    });

});