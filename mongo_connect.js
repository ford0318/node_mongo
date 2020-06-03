const user = encodeURIComponent('mydb');
const password = encodeURIComponent('2Password!');
const authMechanism = 'DEFAULT';
var MongoClient = require('mongodb').MongoClient;
const url = `mongodb://${user}:${password}@localhost:27017/?authMechanism=SCRAM-SHA-1&authSource=mydb`;

const db = MongoClient.connect(url, function (err, client) {
  if (err) throw err;
  var dbo = client.db(`${dbname}`);
  console.log("Conn created!!!!");
  dbo.createCollection('customers', (err, res) => {
    if (err) throw err;
    console.log("Conn Collection created!!!!");
  });
});

module.exports = db