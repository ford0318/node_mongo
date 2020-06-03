//find

const MongoClient = require('mongodb').MongoClient;
var dburi = 'mongodb://localhost:27017/';
var dbname = 'mydb';

MongoClient.connect(dburi,(error,client)=>{
    //db是Mongoclient.connect()成功之後回傳的Mongoclient
    if(error) throw error;
    var dbo = client.db(dbname);
    var mysort = { name: -1};
    dbo.collection('customers').find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
      });
});