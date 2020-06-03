const MongoClient = require('mongodb').MongoClient;
const dburi = 'mongodb://localhost:27017/';
const dbname = 'mydb';

MongoClient.connect(dburi,(err,client) => {
    if(err) throw err;
    console.log('connected mydb!')
    dbo =client.db(dbname);
    var my_object={
        name:"Company Inc",
        address: "Highway 37"
    };

    dbo.collection('customers').insertOne(my_object,(err,res)=>{
        if(err) throw err;
        console.log("Number of documents inserted: " + res.insertedCount);
        client.close();
    });
});