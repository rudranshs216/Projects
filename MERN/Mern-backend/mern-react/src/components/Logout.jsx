import React, {useEffect} from 'react'
import { useHistory } from 'react-router'

export default function Logout(props) {
   const history = useHistory();
    const Logout= async() =>{ 
        try{ 
    const res = await fetch("/logout", {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "include"

    })
    const Data = await res.json()
   
    if(Data == 200){
        
        
       
        history.push("/signin", {replace:true})
        
       
    }
    else{
        console.log(Data);
    }
    

}catch(err){
    console.log(err);
}

}
    useEffect(() => {
       Logout();
        }
     ,[])
    
    return (
        <div>
            <h1>Log Out page</h1>
        </div>
    )
}
