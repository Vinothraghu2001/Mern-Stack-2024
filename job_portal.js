var jwt = require('jsonwebtoken');
var express = require('express');
const { MongoClient, ObjectId } = require('mongodb'); 

var app = express();
app.use(express.json());
app.use('/api/',(req,res,next)=>{
    let{token}=req.headers;
    if(token == ""||token == undefined){
        res.json({"msg":"pls send the token"})
    }else{
        jwt.verify(token,'SECRET');
        next();
    }
});
// enable to run on diffrent portal
var cors = require("cors")
app.use(cors());
//app.use();//middleware 

// main database
const ex = "job_portal"
// url of the database
const url = 'mongodb+srv://vinothraghu842:feelfree@cluster0.ipgvz.mongodb.net/';
const client = new MongoClient(url);
// creating employee data using req.body
app.post("/createjob",async(req,res)=>{
    let {email,password} = req.body;
    let data = {
        "email" : email,
        "password" : password
    }
    // use to connect to the server        
    await client.connect();
    let db = client.db(ex);
    await db.collection('jobs').insertOne(data);
    res.status(200).json({"message":"Job Created"})
})

// for listing all Job details from mongoDB(Database)
app.get("/getjob",async(req,res)=>{
    await client.connect();
    let db = client.db(ex);
    let list = await db.collection('jobs').find({}).toArray();
    res.status(200).json(list)
});

// for getting specific employee details from mongoDB(Database)
// http://localhost:3000/listjobbyname/santhosh
    app.get("/api/list_job/",async(req,res)=>{   // "/listempbyname/:name" => path variable
    await client.connect();
    let {email} = req.params; // postman url
    let db = client.db(ex);
    let list = await db.collection('jobs').find({password:password}).toArray(); //find({name:name}) => mongodb 
    res.status(200).json(list)
})

// checking for login details of employee from database (2 condition) using req.body() for secure information
// postman => body => raw
// Type the email and password in postman(json format) in post method then send
// so it check both condition if it matches the information to the database it fetch the data from database and list in postman
app.post("/joblogin",async(req,res)=>{
    await client.connect();
    let { email, password } = req.body; // postman url
    let db = client.db(ex);
    let list = await db.collection('jobs').find({"email":email,"password":password}).toArray();

    if(list.length > 0){
        //res.json({"msg":"You are correct"})
        //res.status(200).json(list)
        var token = jwt.sign({ "name": list[0]['name'] }, 'SECRET');
        res.json({"msg":"u are correct","token":token});
    }else{
        res.json({"msg":"Email or password is incorrect"})
    } 
});
app.delete("/deletejobbyname",async(req,res)=>{
    let {id} = req.query;
    await client.connect();
    let db = client.db(ex);
    await db.collection("jobs").deleteOne({"_id":new ObjectId(id)})
    res.json({"msg":"user deleted"})
})

app.put("/updatejobbyname",async(req,res)=>{
    let {name,company} = req.query;
    await client.connect();
    let db = client.db(ex);
    await db.collection("jobs").updateOne({"email":email},{
        $set: {"password":password}
        });
    res.json({"message":"Data updated successfully"})
});

// Using post method
app.post('/updatejob',async(req,res)=>{
    let{name,company} = req.body;
    await client.connect();
    let db = client.db(ex);
    await db.collection("jobs").updateOne({"_id":new ObjectId(id)},{
        $set:{"email":email}
    });
    res.json({"message":"updated successfully"});
})

app.get('/updatejobusingget',async(req,res)=>{
    let{id} = req.query;
    await client.connect();
    let db = client.db(ex);
    // we should import Objectid [const { MongoClient, ObjectId } = require('mongodb');] 
    // This code getting data from mongodb using the objectid() new is a keyword
    let data = await db.collection("jobs").find({"_id":new ObjectId(id)}).toArray();
    res.json(data)
})

// Start the Express server 
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});


// req.body => sending the details to server (secure) (json format)
// path variable => contain the data in the url so it's not secure (url format)
// npm i cors -> helps to run both react and express in diffrent portal
// var cors = require("cors")
// app.use(cors());

