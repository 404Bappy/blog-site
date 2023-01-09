import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../App'

export default function Profile() {
  const [mypics,setpics]=useState([])
  const {state,dispatch}= useContext(UserContext)
  const [image,setImage]= useState('')

  useEffect(()=>{
    fetch('/mypost',{
      headers:{
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    }).then(res=>res.json())
    .then(result=>{
      console.log(result)
      setpics(result.mypost)
    })
  },[])

  useEffect(()=>{
    if(image){
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
       
       fetch('/updatepic',{
        method:"put",
        headers:{
          "Content-Type":"application/json",
          "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
          pic:data.url
        })
       }).then(res=>res.json())
       .then(result=>{
        console.log(result)
        localStorage.setItem("user",JSON.stringify({...state,pic:result.pic}))
        dispatch({type:"UPDATEPIC",payload:result.pic})
        // window.location.reload()
       })
       
    })
    .catch(err=>{
        console.log(err)
    })
    }
  },[image])

  const updatePhoto=(file)=>{
    setImage(file)
    
  }
  

  return (
    
    <div style={{maxWidth:"550px", margin:"2px auto"}}>
      <div style={{
  margin:"18px 0px",
  borderBottom: "1px solid grey"
}}>
      <div style={ {
          display:"flex",
          justifyContent: "space-around",
         
        }
      }>
        <div>
       
          <img style={{width:"160px",height:"160px", borderRadius:"80px",} }
          
          src={state?state.pic:"loading"} alt=""
         
          />
          

        </div>
        <div>
          <h4 style={{background:"MediumSeaGreen",color:"white",fontWeight:"bold" ,padding:"10px",fontSize:"20px", textAlign:"center" ,borderRadius:"15px"}}>{state?state.name:"loading"}</h4>
          <h5>{state?state.email:"loading"}</h5>
          <div style={{display:"flex", justifyContent:"space-between", width:"108%"}}>
            <h6>{mypics.length} posts</h6>
            
            
            <h6>{state?state?.followers?.length:"0"} followers</h6>
            <h6>{state?state?.following?.length:"0"} following</h6>
          </div>
        </div>
   </div>

          
          <div className="file-field input-field" style={{margin:"30px"}}>
                <div className="btn #64b5f6 blue darken-1">
                    <span>Update Pic</span>
                    <input type="file" onChange={(e)=>updatePhoto(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
                </div>
          </div>


    <div className="gallery" style={{marginLeft:"30px"}}>
      {
        mypics.map(item=>{
          return(
            
            <h4 style={{fontSize:"20px",}}><img key={item._id} className='item' src={item.photo} alt={item.title}/>{item.title}</h4>
            
            
            
          )
        })
      }
    </div >
    </div>
  )
}
