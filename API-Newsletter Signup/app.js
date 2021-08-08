const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { post } = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/",function(req,res){
res.sendFile(__dirname+"/signup.html");
});
app.post("/",function(req,res){
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;
    const data = {
        members: [
            {
            email_address: email,
            status: "subscribed",
            merge_fields: {
                FNAME: fName,
                LNAME: lName
            }
            }
        ]
    }
    const JSONData = JSON.stringify(data);

    const url = "https://us1.api.mailchimp.com/3.0/lists/17ce835097"
     const options = {
         method: "POST",
         auth: "Nihal:f23f720e1d2b2285a50282bee0641928-us1"
     }
    const request = https.request(url,options,function(response){
if(response.statusCode == 200){
    res.sendFile(__dirname+"/success.html");
}
else{
    res.sendFile(__dirname+"/failure.html");
}
        response.on("data", function(data){
    console.log(JSON.parse(data));
})
    })
    request.write(JSONData);
    request.end(); 
})
app.post("/failure", function(req,res){
    res.redirect("/");
})

app.listen(process.env.PORT,function(){
    console.log("Server is running on the port 3000");
})


// API Key
// f23f720e1d2b2285a50282bee0641928-us1

// List ID
// 17ce835097