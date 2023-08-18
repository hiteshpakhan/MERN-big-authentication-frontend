import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='container position-absolute top-50 start-50 translate-middle text-center'>
        <h1>Error 404</h1>
        <h3>sorry page not found goback to main page</h3>
        <Link to={"/"}> <button> Home Page </button></Link>
    </div>
  )
}

export default ErrorPage