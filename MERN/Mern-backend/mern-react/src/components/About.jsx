import React, {useEffect, useState} from 'react'
import aboutpic from "../Images/profile.jpeg"
import {useHistory} from "react-router-dom";

const About = () => {

    const[data,setData] = useState()
    const history = useHistory();
    let Data;
    const callAboutPage = async() => {
        try{const res = await fetch ("/about", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"

        });
         Data = await res.json();
        
       
        setData(Data);
        
        

        if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
        }
        }catch(err){
            console.log(err);
            history.push("/signin")
        }

    }
    
    
    useEffect(() => {
        callAboutPage();
           
    }, [])
    
    return (
        < >
        <div className="container about_div">
        <form method="GET">
        <div className="row">
        <div className="col-md-4">
           <img src={aboutpic} alt="" />
        </div>
        <div className="col-md-6">
        <h4>Vikram Batra</h4>
        <h5 className="sss">Captain Indian Army</h5>
        <p>Rankings: ⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>

        <div className="container">
        <div className="row">
        <div className="col-md-6">
           <p>User ID</p> 
           <p>Name</p> 
           <p>Email</p> 
           <p>Phone</p> 
           <p>Work</p> 

        </div>
        <div className="col-md-6 sss">
        <p>{data?._id}</p> 
           <p>{data?.name}</p> 
           <p>{data?.email}</p> 
           <p>{data?.phone}</p> 
           <p>{data?.work}</p>

        </div>
        </div>
           
        </div>

        </div>

        <div className="col-md-2">
            <button className="btn btn-sm btn-dark">Edit Profile </button>
        </div>
            
        </div>
        </form>

        </div>
            
        </>
    )
}

export default About

