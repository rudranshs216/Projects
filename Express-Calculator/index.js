const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    const num = Number(req.body.num1) + Number(req.body.num2);
    res.send("The Result is "+ num);
})

app.listen(process.env.PORT, function(){
    console.log("HI")
})