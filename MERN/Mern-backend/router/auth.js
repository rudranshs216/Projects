const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authenticate = require("../Middleware/authenticate")

require("../db/conn");

const User = require("../db/userSchema");

var token;

router.get("/", (req,res)=>{
    res.send("Hello world from router");
})
router.post("/register", (req,res)=>{
    const {name, email, phone, work, password, cpassword } = req.body;
  

    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error: "Plz fill all the field"});
    }
   User.findOne({email: email}).then((userExist) => {
       if(userExist){
           res.status(422).json({error: "Email already exist"})
       }
      
       const user = new User({name, email, phone, work, password , cpassword });
       user.save().then(()=>{
           res.status(201).json({message: "user registered successfully"});
       }).catch((err)=>{res.status(500).json({status:"Failed to register"})})
   }).catch((err)=>{console.log(err);})
    
    
})

// login route

router.post("/signin", async function(req,res){
   try{
    const {email, password} = req.body;
    
    
    
    if(!email || !password){
        return res.status(400).json({status: "400"})
    }
    
    

    const userExist = await User.findOne({email: email});
        if(!userExist){
            return res.status(400).json({status:"401"})
        }
        
        
         else{  
             
            const isMatch = await bcrypt.compare(password,userExist.password);
            
token = await userExist.generateAuthToken();
console.log(token);
res.cookie("jwtoken", token, {
expires: new Date(Date.now + 25892000000),
httpOnly: true
})

        if(isMatch){
            return res.status(200).json({message: "User Logged in succesfully"})
        }
        else{
            return res.status(400).json({status: "401"})
        }
    }
      
    }catch(err){console.log(err); }

    })

       router.get("/about" , authenticate , function(req,res){
     res.send(req.rootUser)
});
       router.get("/getData" , authenticate , function(req,res){
     res.send(req.rootUser)
});

router.post("/contact", async function(req,res){
    
    console.log(req.body.message);
    
    const userExist = await User.findOne({email: req.body.email});
    if(!userExist){
        res.status(400).send("400")
    }
    else{
        userExist.messages = userExist.messages.concat({message: req.body.message}) ;
        await userExist.save();
        res.status(200).send("200");
    }
})
router.get("/logout" , function(req,res){
    console.log("hello my logout page");
    token=""
    res.clearCookie("jwtoken", {path: "/"})
    res.status(200).send("200")
});
router.get("/nav", function(req,res){
    console.log(token);
    if(token.length != 0){
        res.status(200).send("200")
    }else{
        res.status(200).send("400")
    }
})



module.exports = router