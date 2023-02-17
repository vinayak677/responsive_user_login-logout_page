import React, { useEffect, useState } from 'react'
import Form from './Form'
import Navbar from './Navbar'
import Home from './comp/Home'
import Service from './comp/Service'
import Contact from './comp/Contact'
import Blog from './comp/Blog'
import About from './comp/About'


const Main = () => {
  const[active ,setActive]= useState(false)

  useEffect(()=>{
    let log=localStorage.getItem("login")
    if(log){
      setActive(true)
    }
  })


  let loginPage=()=>{
    localStorage.setItem("login",1)
    setActive(true)
  }
  
  let logOutPage=()=>{
    localStorage.removeItem("login")
    setActive(false)
  }

  return (
    <div>
      <Navbar logOutPage={active} logOut={logOutPage}/>
      <div>
        {!active && <Form loginPage={loginPage}/>} 
        {active && <Home  logOutPage={logOutPage}/>} 

      </div>
    </div>
  )
}

export default Main