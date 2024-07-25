import React, { useState } from 'react'
import './styles.css'

function Registration() {

    const[name,setName]= useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
  
    const nameHandler=(e)=>{
     setName(e.target.value);
    }
    const emailHandler=(e)=>{
   setEmail(e.target.value);
    }

    const passwordHandler= (e)=>{
    setPassword(e.target.value);
    }
 const submitHandler=(e)=>{
    e.preventDefault();
    console.log({name});
    console.log({email});
    console.log({password});
 }
  return (
    <div>
      <h1>Registration</h1>
      <div className='name'>
      <label>Name:</label>
      <input type='text' className='box' value={name} onChange={nameHandler} required></input>
      </div>
      <div className='name'>
      <label>Email:</label>
      <input type='email' className='box' value={email} onChange={emailHandler} required></input>
      </div>
      <div className='name'>
        <label>password:</label>
        <input type= "Password"  className='box' value={password} onChange={passwordHandler} required></input>
      </div>
      <button className='submit'onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Registration
