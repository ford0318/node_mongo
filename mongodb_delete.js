//find

const MongoClient = require('mongodb').MongoClient;
var dburi = 'mongodb://localhost:27017/';
var dbname = 'mydb';

MongoClient.connect(dburi,{useUnifiedTopology: true},(error,client)=>{
    //db是Mongoclient.connect()成功之後回傳的Mongoclient
    if(error) throw error;
    var dbo = client.db(dbname);
    var myobject = {name: 'Peter',
    address: 'Lowstreet 4' };

    dbo.collection('customers').deleteOne(myobject,(err,res)=>{
      if(err) throw err;
      console.log(res.deletedCount);
      client.close();
    });
});