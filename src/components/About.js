import React, { useEffect, useState } from 'react';
import userimg from "../images/user.jpg";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  let [userData, serUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("https://mernbigauthserver.onrender.com/about",{
        method:"GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      console.log("this is the data we have got from the /about : ", data, " and this is the res.status no: ", res.status);
      
      serUserData(data);
      
      
      if(res.status !== 200){
        const error = new Error(res.error)
        throw error; 
      }

    } catch (error) {
      console.log("here this is the error inside the catch : ",error);
      navigate("/login")
    }
  }

  useEffect(() => {
    callAboutPage();
  });
  

  return (
    
    <div className="card position-absolute top-50 start-50 translate-middle text-center p-3 m-3" >
      <form method='GET'>

          <img src={userimg} alt='user' width={"150px"} height={"150px"} />
          <h6>Profile Photo</h6>
            
          <div className='pt-4'>
            

            <div className='row'>
              <div className='col-md-4'>
                <label>name :</label>
              </div>
              <div className='col-md-8'>
                <p>{userData.name}</p>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-4'>
                <label>work :</label>
              </div>
              <div className='col-md-8'>
                <p>{userData.work}</p>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-4'>
                <label>email :</label>
              </div>
              <div className='col-md-8'>
                <p>{userData.email}</p>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-4'>
                <label>phone :</label>
              </div>
              <div className='col-md-8'>
                <p>{userData.phone}</p>
              </div>
            </div>

            <div className='row'>
              <div className='col-md-4'>
                <label>User ID :</label>
              </div>
              <div className='col-md-8'>
                <p>{userData._id}</p>
              </div>
            </div>

          </div>

      </form>
      
    </div>
  )
}
export default About