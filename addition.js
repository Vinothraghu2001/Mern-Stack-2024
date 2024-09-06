var express = require("express");
var app = express();
app.use(express.json());

app.post("/addition", (req, res) => {
    let {num1,num2} = req.body;
    console.log(num1,num2);
    let result = num1 + num2;
    console.log(result)
    
});

app.listen(8082, () => {
    console.log("Server started");
});