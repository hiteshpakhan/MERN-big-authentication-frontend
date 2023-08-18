import React, { createContext, useReducer } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from "./components/About"
import Contact from "./components/Contact"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import ErrorPage from './components/ErrorPage'
import Logout from './components/Logout'

import { initialState, reducer } from './reducer/UseReducer'

// context api
export const UserContext = createContext();

const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider value={{state, dispatch}} >

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>

      </UserContext.Provider>
    </>
  )
}

export default App