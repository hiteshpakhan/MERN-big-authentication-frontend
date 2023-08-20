import React,{useState, useEffect} from 'react'

const Home = () => {

  const [userName, serUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      console.log("inside the console.log of try before /getData")
      const res = await fetch("/getData",{
        method:"GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      console.log("inside the console.log of try before data = await res.json()")

      const data = await res.json();
      
      serUserName(data.name);

      if(userName !== ""){
        setShow(true);
      }

    } catch (error) {
      console.log("here this is the error inside the catch : ",error);
    }
  }

  useEffect(() => {
    userHomePage();
  }, []);

  return (
    <div class="position-absolute top-50 start-50 translate-middle text-center" style={{color: "white"}} >
        <h1>WELCOME {userName}</h1>
        <h3 className='mt-5'>{ show ? "happy, to see you back" : "Advanced Login & Registration Application which use the cookies, token to login and logout user"}</h3>
        <h3 className='mt-5'>Feel free to Register here and try to login</h3>
        <h3 className='mt-5'>using React JS, Mongo DB, Express JS </h3>
    </div>
  )
}

export default Home