const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://vinothraghu842:vinoth21012001@cluster0.ipgvz.mongodb.net/"; 
const client = new MongoClient(url);

// Database Name
const dbName = 'office';    


async function insertData(){
    let empData = {
        "name":"",
        "mobile":"",
        "address":""
    }
    await client.connect();
    const db = client.db(dbName);
    const collection = await db.collection("employee");
    await collection.insertOne(empData);
    console.log("inserted");
}

insertData();