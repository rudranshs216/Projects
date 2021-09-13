const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express= require("express")
var bodyParser = require('body-parser')
var cookies = require("cookie-parser");


const app=express();
app.use(cookies());



dotenv.config({path: "./config.env"})

require("./db/conn");
app.use(express.json());
app.use(require("./router/auth"))

const User = require("./db/userSchema");

const PORT = process.env.PORT || 3001

app.get("/" , function(req,res){
     res.send("Home Page")
});
// app.get("/about" , function(req,res){
//      res.send("about Page")
// });
app.get("/contact" , function(req,res){
     res.send("contact Page")
});
app.get("/signin" , function(req,res){
     res.send("signin Page")
});
app.get("/signup" , function(req,res){
     res.send("signup Page")
});

if ( process.env.NODE_ENV == "production"){

     app.use(express.static("mern-react/build"));
 
     const path = require("path");
 
     app.get("*", (req, res) => {
 
         res.sendFile(path.resolve(__dirname, 'mern-react', 'build', 'index.html'));
 
     })
 
 
 }

app.listen(3001, function(){
console.log("the server is running on the port " + PORT);
})