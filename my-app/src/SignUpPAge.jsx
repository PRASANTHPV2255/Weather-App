import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUpPAge() {

  const [Name, setname] = useState('')
  const [Email, setemail] = useState('')
  const [Password, setpassword] = useState('')

  const nav=useNavigate();

  const login=()=>{
    nav('/login')
  }
  const handleSubmit=async(event)=>{
    event.preventDefault()
    const api='http://localhost:5000/signup';

    // if(!Name || !Email || !Password){
      // alert('Fill all the existing input')
   
      const signup=await axios.post(api,{Name,Email,Password})
        if(signup.data.Token){
          await alert(signup.data.msg)
          nav('/main')
          setemail('')
          setname('')
          setpassword('')
        } else{

          alert(signup.data.msg)
        }
        console.log(signup.data.msg);
    }

  return (
    <div className='login'>
      <div class="card card-style" style={{width: "18rem"}}>
        <h3>Register</h3>
      </div>
    <div class="card card-style" style={{width: "18rem"}}>
        <div class="form-floating mb-3">
            <input onChange={(e)=>setname(e.target.value)} type="text" class="form-control" id="floatingInput" placeholder="Name"/>
            <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
            <input onChange={(e)=>setemail(e.target.value)} type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
          <input onChange={(e)=>setpassword(e.target.value)} type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
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
              <a href="#" onClick={login}>Login</a>
            </div>
          
        </div>
      </div>
      <div class="card card-style" style={{width: "18rem"}}>
        <button type="button" class="btn btn-outline-secondary" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  )
}

export default SignUpPAge