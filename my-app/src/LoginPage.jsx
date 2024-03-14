import React, { useState } from 'react'
import './Style.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function LoginPage() {
  const nav=useNavigate()

  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const api='http://localhost:5000/login'

  const login=async(event)=>{
    event.preventDefault()

    const userlogin=await axios.post(api,{Email,Password})
    // console.log(`msg:${userlogin.data.msg} userlogindata:${userlogin}`);
    if(userlogin.data.Token){
      await alert(userlogin.data.msg)
      nav('/main')
      setEmail('');
      setPassword('')
    } else{
      await alert(userlogin.data.msg)
    }
  }
  

  const register=()=>{
    nav('/')
  }
  return (
    <div className='login'>
      <div class="card card-style" style={{width: "18rem"}}>
        <h3>Login</h3>
      </div>
    <div class="card card-style" style={{width: "18rem"}}>
        <div class="form-floating mb-3">
            <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
          <label for="floatingPassword">Password</label>
        </div>
          <div className='check-box-section'>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
              Checked 
            </label>
            </div>
            <div>
              <a href="#" onClick={register}>Register</a>
            </div>
          
        </div>
      </div>
      <div class="card card-style" style={{width: "18rem"}}>
        <button onClick={login} type="button" class="btn btn-outline-secondary">
          Login
        </button>
      </div>
    </div>
  )
}

export default LoginPage