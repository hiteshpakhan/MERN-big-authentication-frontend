import React, { useEffect, useState } from 'react';

const Contact = () => {
  let [userData, serUserData] = useState({name: "",email: "",phone: "",message: ""});

  const userContact = async () => {
    try {
      const res = await fetch("/getData",{
        method:"GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      
      serUserData({...userData, name: data.name, email: data.email, phone: data.phone});
      
      if(res.status !== 200){
        const error = new Error(res.error)
        throw error; 
      }

    } catch (error) {
      console.log("here this is the error inside the catch : ",error);
    }
  }

  useEffect(() => {
    userContact();
  });
  
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    serUserData({...userData, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {name, email, phone, message} = userData;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    });

    const data = await res.json();

    if(!data){
      console.log("MESSAGE NOT SEND");
    }else{
      alert("message send");
      serUserData({...userData, message: ""})
    }
  }

  return (
    <>
    <div class="card position-absolute top-50 start-50 translate-middle text-center"  >
              <div class="card-body">
                <h5 class="card-title">get in touch</h5>
                <form method='POST'>                 
                  <div>
                    name
                    <br></br>
                    <input type='text' value={userData.name} name='name' onChange={handleInputChange} id='name' placeholder='your name' />
                  </div>                  
                  <div>
                    email
                    <br></br>
                    <input type='email' value={userData.email} name='email' onChange={handleInputChange} id='email' placeholder='your email' />
                  </div>                  
                  <div>
                    number
                    <br></br>
                    <input type='number' value={userData.phone} name='phone' onChange={handleInputChange} id='phone' placeholder='your phonenumber' />
                  </div>                  
                  <div>
                    message
                    <br></br>
                    <textarea name='message' onChange={handleInputChange} id='message' placeholder='your message' />
                  </div>                  
                  <div>
                    <button onClick={handleSubmit} type='submit'>send message</button>
                  </div>
                </form>
              </div>
        </div>
    </>
  )
}

export default Contact