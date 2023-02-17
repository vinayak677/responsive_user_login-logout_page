import React, { useState } from 'react'

const Form = (props) => {

   const[email,setEmail] = useState("");
   const[emailIsValid,setEmailIsValid]= useState("")
   const[password,setPassword]=useState("");
   const[passwordIsValid,setPasswordIsValid]=useState("")
  const [formIsValid, setFormIsValid] = useState(false);

  
  let handleEmail=(e)=>{
    setEmail(e.target.value)
    setFormIsValid(e.target.value.includes("@") && password.trim().length > 6)
  }

  let handlePass=(e)=>{
   setPassword(e.target.value)
   setFormIsValid(e.target.value.trim().length>6 && email.includes("@"))
  }

  let handleSubmit=(e)=>{
    e.preventDefault()
    props.loginPage(email,password)
  }

  return (
    <div className='contain'>

    <div className='formi'>
   <form  onSubmit={handleSubmit}>
    <div className='logins'>
     <div className='inputs'>
        <span>E-mail</span>
        <input className='pass'  type="text" value={email} placeholder='enter email' onChange={handleEmail}/>
     </div>
     <div className='inputs'>
        <span>Password</span>
        <input className='pass'  type="password" value={password} placeholder='password' onChange={handlePass}/>
     </div>
    </div>
    <div className='loginbtn'>
    <button className='' type='submit' disabled={!formIsValid}>Login</button>
    </div>
   </form>
    </div>
    </div>
  )
}

export default Form