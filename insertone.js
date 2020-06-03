const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const user = encodeURIComponent('mydb');
const password = encodeURIComponent('2Password!');


// Connection URL
const url = `mongodb://${user}:${password}@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=mydb`;
const dbName = 'mydb';

(async function() {
  const client = new MongoClient(url);

  try {
    await client.connect();
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    // Insert a single document
    let r = await db.collection('inserts').insertOne({a:1});
    assert.equal(1, r.insertedCount);

    
    // Insert multiple documents
    r = await db.collection('inserts').insertMany([{a:2}, {a:3}]);
    assert.equal(2, r.insertedCount);
  } catch (err) {
    console.log(err.stack);
  }

  // Close connection
  client.close();
})();