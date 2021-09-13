import React, {useEffect, useState} from 'react'


const Contact = () => {
  var naam;
  const[data,setData] = useState()
    const[message,setMessage] = useState("")
  var email = data?.email;
   
  
    const callAboutPage = async() => {
        try{const res = await fetch ("/getData", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }

        });
         let Data = await res.json();
       
        setData(Data);
        

        if(!res.status === 200){
            const error = new Error(res.error);
            throw error;
        }
        }catch(err){
            console.log(err);
          }

    }
    

    const messageInput = (event) => {
         setMessage(event.target.value)
    }
    const ClickContact = async (event) =>
{
  event.preventDefault();
try{
  const res = await fetch("/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
 },
 body: JSON.stringify({
   email, message
 })
  })
  const data = await res.json();
  console.log(data);
    if(data.status === 400 || !data){
      window.alert("Email Not Registered");
      console.log("Email Not Registered");
    }
    else{
      window.alert("Message Sent Successfully");
      console.log("Message Sent Successfully");

     setMessage("");
    }
}catch(err){
  console.log(err);
}

}   
    
    
    useEffect(() => {
        callAboutPage();
           
    }, [])  
  return (
       <>
          <div className="contact_info_div">
          <div class="container">
  <div class="row row_contact">
    <div class="col-md-3 col_contact">
    <i class="i_contact zmdi zmdi-account-box-phone"></i>

    <div className="contact_info_item"> <h5 className="h5_contact">Phone</h5>
      <br />
      <p className="p_contact">987654321</p></div>
     
    </div>
    <div class="col-md-3  col_contact">
    <i class="i_contact zmdi zmdi-email"></i>

<div className="contact_info_item"><h5 className="h5_contact">Email</h5>
      <br />
      <p className="p_contact">123@123.com</p></div>
      
    </div>
    <div class="col-md-3  col_contact">
    <i class="i_contact zmdi zmdi-gps-dot"></i>

      <div className="contact_info_item"><h5 className="h5_contact">Location</h5>
      <br />
      <p className="p_contact">India</p></div>
      
    </div>
  </div>
</div>
</div>


   <div className="contactme_div">
   <form method="POST">
   <h2 className="h2_contact">Get In Touch</h2>
   <input className="contact_input_name" value={data? data?.name : naam } type="text" name="name" placeholder="Your Name" />
   <input className="contact_input" value={data?.email}  type="email" name="email" placeholder="Your Email" />
   <input className="contact_input" value={data?.phone} type="number" name="number" placeholder="Your Number" />
   <br />
   <textarea onChange={messageInput} value={message} name="message" id="message" placeholder="Your Message"/>
   <br />
   <button onClick={ClickContact} className="button_contact btn btn-lg btn-dark">Send Message</button>
   </form>

   </div>
        </>
    )
}

export default Contact
