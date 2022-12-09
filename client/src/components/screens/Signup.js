import React, { useEffect, useState } from 'react'
import { Link, useNavigate,} from 'react-router-dom'
import M from 'materialize-css'

export default function Signup() {
  
  const navigate = useNavigate()
  const [name,setname]= useState('')
  const [password,setPassword]= useState('')
  const [email,setEmail]= useState('')
  const [image,setImage]= useState('')
  const [url,setUrl]= useState(undefined)

  useEffect(()=>{
    if(url){
      uploadFields()
    }
  },[url])

  const uploadPic = ()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","blog-app")
    data.append("cloud_name","dluu1xcoo")
    fetch("https://api.cloudinary.com/v1_1/dluu1xcoo/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
       setUrl(data.url)
    })
    .catch(err=>{
        console.log(err)
    })
  }

  const uploadFields=()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html: "invalid email", classes:"#c62828 red dareken-3"})
      return 
   }

   fetch("/signup",{
     method:"post",
     headers:{
       "Content-Type":"application/json"
     },
     body:JSON.stringify({
       name,
       password,
       email,
       pic:url
     })
   }).then(res=>res.json())
   .then(data=>{
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
  const PostData =()=>{

    if(image){
      uploadPic()
    }else{
      uploadFields()
    }

    
  }
  return (
        <div className='mycard'>     
           <div class="card auth-card">
        <h2>Blog App</h2>
       <input 
       type="text" 
       placeholder="name"
       value={name}
       onChange={(e)=>setname(e.target.value)}
       />
       <input 
       type="text" 
       placeholder="email"
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
       />
       <input 
       type="password" 
       placeholder="password"
       value={password}
       onChange={(e)=>setPassword(e.target.value)}
       />
       <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Upload Pic</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
                </div>
       <button className='btn waves-effect waves-light #64b5f6 blue darken-1'
       onClick={()=>PostData()}>
        SignUp
       </button>
       <h5>
        <Link to="/signin">Already have an account?</Link>
       </h5>

           </div>
      </div>   
  )
}
