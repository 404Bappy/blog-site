import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../App';

export default function Navbar() {

  const {state,dispatch}=useContext(UserContext)
  const navigate=useNavigate()
  const renderList=()=>{
    if(state){
        return [
          <li><Link to="/profile">Profile</Link></li>,
          <li><Link to="/create">Create Post</Link></li>, 
          <li><Link to="/myfollowingspost">My following Posts</Link></li>, 
      <li>
    
 <button className='btn #c62828 red darken-3'
       onClick={()=>{
        localStorage.clear()
        dispatch({type:"CLEAR"})
        navigate('/signin')
       }}
       >
        Logout
       </button>
        </li>
      ]

    }
  }
  return (
    <nav>
    <div className="nav-wrapper white">
      <Link to={state?'/':"/signin"} className="brand-logo left">Blog App</Link>
      <ul id="nav-mobile" className="right">
       {renderList()}
      </ul>
    </div>
  </nav>
  )
}