//find

const Mongoclient = require('mongodb').Mongoclient;
var dburi = 'mongodb://localhost:27017/';
var dbname = 'mydb';

Mongoclient.connect(dburi,(error,client)=>{
    //db是Mongoclient.connect()成功之後回傳的Mongoclient
    if(error) throw error;
    var dbo = client.db(dbname);

    dbo.collection('customers').findOne({},(err,res)=>{
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount +"; The findOne result: " + res.name);
    client.close();
    });
});