import React,{useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../App';

const Login = () => {

  const {state, dispatch} = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()
  function goToHome(){
    navigate("/")
  }

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })

    const data =  res.json();

    if (!data || data.status === 400|| data.error) {
      alert("login error please refill the creadientials")
    } else {
      dispatch({type: "USER", payload: true})
      alert("login successfully"); 
      goToHome();
    }
  }

  return (
    <>
    <div class="card position-absolute top-50 start-50 translate-middle text-center"  >
              <div class="card-body">
                <h5 class="card-title">Login</h5>
                
                <form method="POST" className='register-form' id="register-form">      
                  
                  <div>
                    email
                    <br></br>
                    <input type='text' name='email' id='email' autoComplete='off' 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)} 
                    placeholder='your email' />
                  </div>
                  
                  <div>
                    password
                    <br></br>
                    <input type='password' name='password' id='password' autoComplete='off' 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)} 
                    placeholder='your password' />
                  </div>
                  <div>  . </div>
                
                  <div>
                  <br></br>
                    <input type='submit' name='login' id='login' 
                    onClick={loginUser} 
                     />
                  </div>
                </form>
              </div>
        </div>
    </>
  )
}

export default Login