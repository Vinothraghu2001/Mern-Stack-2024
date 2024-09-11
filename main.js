var express = require('express');
const { MongoClient } = require('mongodb'); 

var cors = require('cors');


var app = express();
app.use(express.json());
app.use(cors());

const ex = "office"
const url = "mongodb+srv://vinothraghu842:feelfree@cluster0.ipgvz.mongodb.net/"; 
const client = new MongoClient(url);
app.post("/createEmployee",async(req,res)=>{
    let {name,email,password,mobile_no} = req.body;
    let data = {
        "name" : name,
        "email" :  email,
        "password" : password,
        "mobile_no" : mobile_no
    }
       
    await client.connect();
    let db = client.db(ex);
    await db.collection('employee').insertOne(data);
    res.status(200).json({"message":"Employee Created"})
})

// for listing all employee details from mongoDB(Database)
app.get("/getemployee",async(req,res)=>{
    await client.connect();
    let db = client.db(ex);
    let list = await db.collection('employee').find({}).toArray();
    res.status(200).json(list)
});

// for getting specific employee details from mongoDB(Database)

app.get("/listempbyname/:name",async(req,res)=>{
    await client.connect();
    let {name} = req.params;
    let db = client.db(ex);
    let list = await db.collection('employee').find({name:name}).toArray();
    res.status(200).json(list)
})
app.delete("/deleteUserByName",async(req,res)=>{
    let {name} = req.query;
    await client.connect();
    let db =  client.db(ex)
    await db.collection("employee").deleteOne({"name":name})
    res.json({"msg":"user deleted"})
})

// Start the Express server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});