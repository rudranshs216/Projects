const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    const num = Number(req.body.num2)/(Number(req.body.num1)*Number(req.body.num1));
    res.write("The BMI is "+ num);
    if(num<18){
        res.write(
            "\nUnderweight")
    }
    else if(num>=18 && num<=25){
        res.write(
            "\nNormal");
    }
    else{
        res.write("Overweight");
    }
    res.send();
})

app.listen(3001, function(){
    console.log("HI");
});
