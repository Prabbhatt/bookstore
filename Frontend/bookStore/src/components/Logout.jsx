import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {

    const [authUser,setAuthUser]=useAuth();
    const handlelogout = ()=>{
     try {
        setAuthUser({
            ...authUser,
            user:null
        })
        
        localStorage.removeItem("Users");
        toast.success("Logged out successfully");
        setTimeout(()=>{
          window.location.reload();}
        ,1000)

        
     } catch (error) {

        toast.error("Error"+ error.message)
        
     }

    }

  return (
    <>
    <div onClick={handlelogout} className='bg-red-500 py-3 md:px-3 border border-black rounded-2xl cursor-pointer px-4  mx-3 md:mx-0'>

     Logout
    </div>
    </>
  )
}

export default Logout