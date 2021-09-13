import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import signup from "../Images/signup.svg"


const Signup = () => {
  let history = useHistory();
  
  const [user, setUser] = useState({
    name:"",
    email:"",
    phone:"",
    work:"",
    password:"",
    cpassword:""
  })
 let name, value
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value
     setUser({...user, [name]:value})
  }

  const postData = async(e) =>{
    e.preventDefault();
    const { name,email,phone,work,password,cpassword} = user;
    const res = await fetch ("/register",{
      method: "POST",
      headers: {
           "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    });
    const data = await res.json();
    if(data.status === 422 || !data){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }
    else{
      window.alert("Registration Successfull");
      console.log("Registration Successfull");

      history.push("/signin")
    }

  }
    
  return (
        <>
       <div class="container">
  <div class="row row_sign py-5 my-5">
    <div class="col-lg-6">
      <div className="main_div">
      <h2>Sign-Up</h2>
      <form method="POST" class="form-label-group">
         <label class="px-2 py-3" htmlFor="name"><i class="zmdi zmdi-account"></i>
</label>
         <input style={{border:"none", borderBottom: "2px solid #888"}} name="name" type="text" placeholder="Name" autoComplete="false" value={user.name} onChange={handleChange}/>
         <br />
         
         <label class="px-2 py-3" htmlFor="email"><i class="zmdi zmdi-account-box-mail"></i>

</label>
         <input style={{border:"none", borderBottom: "2px solid #888"}} name="email" type="email" placeholder="Email" autoComplete="false" value={user.email} onChange={handleChange}/>
         <br />
         
         <label class="px-2 py-3" htmlFor="phone"><i class="zmdi zmdi-phone"></i>

</label>
         <input style={{border:"none", borderBottom: "2px solid #888"}} name="phone" type="number" placeholder="Phone" autoComplete="false"value={user.phone} onChange={handleChange} />
         <br />
         
         <label class="px-2 py-3" htmlFor="work"><i class="zmdi zmdi-group-work"></i>

</label>
         <input style={{border:"none", borderBottom: "2px solid #888"}} name="work" type="text" placeholder="Work" autoComplete="false" value={user.work} onChange={handleChange}/>
         
         <br />
         
         <label class="px-2 py-3" htmlFor="password"><i class="zmdi zmdi-shield-security"></i>

</label>
         <input style={{border:"none", borderBottom: "2px solid #888"}} name="password" type="password" placeholder="Password" autoComplete="false" value={user.password} onChange={handleChange}/>
        <br /> 
        
        <label class="px-2 py-3" htmlFor="cpassword"><i class="zmdi zmdi-shield-security"></i>

</label>
         <input style={{border:"none", borderBottom: "2px solid #888"}} name="cpassword" type="password" placeholder="CPassword" autoComplete="false" value={user.cpassword} onChange={handleChange}/>
<br />
<button onClick={postData} className="btn btn-lg btn-dark my-4 ">Register</button>
      </form>
     
      </div>

    </div>
    <div class="col-lg-6">
    <div className="signin_img_div">
     <img className="img_signin" src={signup} alt="SignUp" width="80%"/>
     </div>
     <br />
     
     
     <div className="signin_link_div"><NavLink className="signup_link" to="/signin">Not a User, then Register</NavLink></div>
     
     </div>
    
    
  </div>
</div>
        </>
    )
}

export default Signup