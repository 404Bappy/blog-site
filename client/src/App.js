import { createContext, useReducer, useEffect, useContext } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import SignIn from './components/screens/SignIn';
import Signup from './components/screens/Signup';
import CreatePost from './components/screens/CreatePost';
import UserProfile from './components/screens/UserProfile';
import SubscribesUserPosts from './components/screens/SubscribesUserPosts';
import Reset from './components/screens/Reset';
import NewPassword from './components/screens/Newpassword';
import Play from './components/screens/Play';
import Country from './components/Country';
import {reducer,initialState} from './reducers/userReducer';
import Animal from './components/screens/Animal';
import Programing from './components/screens/Programing';
import Design from './components/screens/Design';
import Study from './components/screens/bollger_buz/Study';



export const UserContext = createContext()

const Routing=()=>{
  const navigate = useNavigate()
  const {state,dispatch}=useContext(UserContext)

  useEffect(()=>{
    const user =JSON.parse(localStorage.getItem('user'))
    if(user){
      dispatch({type:"USER",payload:user})
    }else{
      // if(!navigate.location.pathname.startsWith('/reset')){
        
      // }
      navigate('/signin')
        
      
     
      
    }
  },[])
  return(
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signin' element={<SignIn/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route exact path='/profile' element={<Profile/>}/>
    <Route exact path='/play' element={<Play/>}/>
    <Route exact path='/country' element={<Country/>}/>
    <Route exact path='/animal' element={<Animal/>}/>
    <Route exact path='/programing' element={<Programing/>}/>
    <Route exact path='/design' element={<Design/>}/>
    <Route exact path='/study' element={<Study/>}/>
    <Route path='/create' element={<CreatePost/>}/>
    <Route path='/profile/:userid' element={<UserProfile/>}/>
    <Route path='/myfollowingspost' element={<SubscribesUserPosts/>}/>
    <Route exact path='/reset' element={<Reset/>}/>
    <Route path='/reset/:token' element={<NewPassword/>}/>
  </Routes>
  
  )
}

function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>

    <BrowserRouter>
    <Navbar />
    <Routing />
   
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
