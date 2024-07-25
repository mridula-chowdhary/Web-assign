import{useState} from 'react';
import './loginstyle.css'

function Login() {
  const [email,setEmail]=useState('');
  const[password,setPassword]=useState('');

  const emailHandler=(e)=>{
    setEmail(e.target.value);
     }
 
     const passwordHandler= (e)=>{
     setPassword(e.target.value);
     }
  const submitHandler=(e)=>{
        e.preventDefault();
        console.log({email});
        console.log({password});
     
  }
  return (
    <div className='main'>
        <h2>Login</h2>
      <div>
        <div className='box'>
      <label>Email:</label>
      <input type='email' className='box' value={email}  onChange={emailHandler}></input>
      </div>
      <div className='name'>
        <label>password:</label>
        <input type= "Password"  className='box' value={password}  onChange={passwordHandler}></input>
      </div>
      <button className='submit'onClick={submitHandler}>Submit</button>
      </div>
      </div>
 
  )
}

export default Login
