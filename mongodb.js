const {MongoClient} = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);


async function dbcollection() {
    let result = await client.connect();
    let db=result.db('soms');
    return db.collection('user');
}

module.exports=dbcollection;