import React,{useContext} from 'react';
import {assets} from "../assets/assets" 
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
const Navbar = () => {
    const {  openSignIn } = useClerk();
const {user}=useUser()
  const navigate=useNavigate()
  const {setShowRecruiterLogin}=useContext(AppContext)
  return (
    <div className='shadow py-4 '>
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between '>
        <img onClick={()=>navigate("/")} src={assets.logo} alt="Insider Home Job" className='cursor-pointer'/>
        {user ?
        <div className='flex items-center gap-3'>
           <Link to={"/applications"}>Applied jobs</Link> 
           <p>|</p>
           <p className='max-sm:hidden '>Hi, {user.firstName + "" + user.lastName}</p>
           <UserButton/>
        </div>
    :<div className='flex gap-4 max-sm:text-xs'>
    <button className='text-gray-600 ' onClick={e=>setShowRecruiterLogin(true)}>Recruiter Login</button>

<button onClick={ e => openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full  '>Login</button>
</div>
}
 
       
        
    </div>
    </div>
  );
}

export default Navbar;