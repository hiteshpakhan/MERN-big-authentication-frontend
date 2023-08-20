import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [user, setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:""
  })

  const navigate = useNavigate()
  function goToLogin(){
    navigate("/login")
  }

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value});
  }

  const postData = async (e) => {
    e.preventDefault();

    const {name,email,phone,work,password,cpassword} = user;

    const res = await fetch("/registerdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        name,email,phone,work,password,cpassword
      })
    });

    const data = res.json();

    if (!data || data.status === 422) {
      alert(" registration error empty res or status 422 ")
    } else {
      alert("registration successfull");
      goToLogin();  
    }
    setUser({
      name:"",email:"",phone:"",work:"",password:"",cpassword:""
    })

  }

  return (
    <>
    {console.log("value of user : ",user)}
        <div class="card position-absolute top-50 start-50 translate-middle text-center">
              <div class="card-body">
                <h5 class="card-title">Sign up</h5>
                <br></br>
                <form method="POST" className='register-form' id="register-form">
                  <div>
                    name
                    <br></br>
                    <input type='text' name='name' id='name' autoComplete='off' value={user.name} onChange={handleInputs} placeholder='your name' />
                  </div>
                  <div>
                    email
                    <br></br>
                    <input type='text' name='email' id='email' autoComplete='off' value={user.email} onChange={handleInputs} placeholder='your email' />
                  </div>
                  <div>
                    phone number
                    <br></br>
                    <input type='number' name='phone' id='phone' autoComplete='off' value={user.phone} onChange={handleInputs} placeholder='your phone' />
                  </div>
                  <div>
                    work
                    <br></br>
                    <input type='text' name='work' id='work' autoComplete='off' value={user.work} onChange={handleInputs} placeholder='your work' />
                  </div>
                  <div>
                    password
                    <br></br>
                    <input type='password' name='password' id='password' autoComplete='off' value={user.password} onChange={handleInputs} placeholder='your password' />
                  </div>
                  <div>
                    confirm password
                    <br></br>
                    <input type='password' name='cpassword' id='cpassword' autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder='confirm password' />
                  </div>
                  <div>
                  <br></br>
                    <input type='submit' name='signup' id='signup' onClick={postData} />
                  </div>

                </form>
              </div>
              <div className='m-3'>if you are already registered click  <Link  to="/login">here</Link></div>
        </div>
      
    </>
  )
}

export default Signup