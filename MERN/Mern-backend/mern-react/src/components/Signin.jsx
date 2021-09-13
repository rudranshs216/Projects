import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import signin from "../Images/signin.svg"

const Signin = (props) => {
  let history = useHistory();

  const [email, setEmail] =useState("");
  const [password, setpassword] =useState("");

  const changeHandlere = (event) =>{
   setEmail(event.target.value)

  }
  const changeHandlerp = (event) =>{
    setpassword(event.target.value)

  }
  const postUser = async (e) =>{
    e.preventDefault();
    
     const res = await fetch("/signin", {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email,password
      })
    })
    setEmail("");
    setpassword("");
    const data = await res.json();
    console.log(data.status);
   
    if(data.status == "401" || !data){
      window.alert("Invalid Credentials");
     
    }
    else if(data.status == "400" || !data){
      window.alert("please fill all the details");
     
    }
    else{
      
      
      
     

      history.push("/")
    }
     } 

  return (
        <>
        <div class="container">
   <div class="row row_sign py-5 my-5">
   <div class="col-md-6">
     <div className="signin_img_div">
     <img className="img_signin" src={signin} alt="SignUp" width="80%"/>
     </div>
     <br />
     
     
     <div className="signin_link_div"><NavLink className="signup_link" to="/signup">Not a User, then Register</NavLink></div>
     
     </div>

     <div class="col-md-6">
       <div className="main_div">
       <h2>Sign-In</h2>
       <form method="POST" class="form-label-group">
         
          
          <label class="px-2 py-3" htmlFor="email"><i class="zmdi zmdi-account-box-mail"></i>
 
 </label>
          <input style={{border:"none", borderBottom: "2px solid #888"}} onChange={changeHandlere} value={email} name="email" type="email" placeholder="Email" autoComplete="false" />
          <br />
          
         
          
          <label class="px-2 py-3" htmlFor="password"><i class="zmdi zmdi-shield-security"></i>
 
 </label>
          <input style={{border:"none", borderBottom: "2px solid #888"}} onChange={changeHandlerp} value={password} name="password" type="password" placeholder="Password" autoComplete="false" />
        
 <br />
 <button onClick={postUser} className="btn btn-lg btn-dark my-4 ">Sign-In</button>
       </form>
      
       </div>
 
     </div>
    
     
   </div>
 </div>
         </>
    )
}

export default Signin
