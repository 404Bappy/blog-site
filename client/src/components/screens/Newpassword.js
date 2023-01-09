import React, { useState} from 'react'
import {useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css'

export default function SignIn() {

  const navigate = useNavigate()
  const [password,setPassword]= useState('')
  const {token}= useParams()
  console.log(token)

  const PostData =()=>{

 
    fetch("/new-password",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        
        password,
        token
        
      })
    }).then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.error){
      M.toast({html: data.error, classes:"#c62828 red dareken-3"})
    }
    else{
      
      M.toast({html:data.message,classes:"#43a047 green darken-1"})
      navigate('/signin')
    }
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
        <div className='mycard'>     
           <div class="card auth-card">
        <h2>Blog App</h2>
        
       <input 
       type="password" 
       placeholder="Enter a new password"
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       />
       <button className='btn waves-effect waves-light #64b5f6 blue lighten-1'
       onClick={()=>PostData()}
       >
        Update password
       </button>


           </div>
      </div>   
  )
}
