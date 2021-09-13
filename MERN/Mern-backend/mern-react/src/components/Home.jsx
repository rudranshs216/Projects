import React, {useState, useHistory, useEffect} from 'react'

const Home = () => {
    const[data,setData] = useState()
    
    let Data;
    const callAboutPage = async() => {
        try{const res = await fetch ("/getData", {
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
           
        }

    }
    
    
    useEffect(() => {
        callAboutPage();
       
           
    }, [])
    
    return (
        <div className="home_page">
        <div className="home_div">
        <p>Welcome</p>
        <h1>{data?.name}</h1>
        <br />
        <h2>{data? "Great to see you" : "I'm a MERN developer"}</h2>

        </div>
           
        </div>
    )
}

export default Home
