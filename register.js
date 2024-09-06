var express= require("express");
var app=express();
app.use(express.json());
app.post("/register",(req,res)=>{
    let {name,email,password,address} = req.body;
    if(name == 'vinoth' && email == "vino@21gmail.com"&&password =="1234"&&address =="chennai"){
        res.json({"msg": "valid address "})
    }else{
        res.json({"msg": "invalid email or password"})
    }
})
app.listen(8082,()=>{
    console.log("server strated")
});
