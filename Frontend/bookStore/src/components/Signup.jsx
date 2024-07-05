import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Signup() {
  return (
    <>
    <div className="modal-box justify-center items-center mx-auto  mt-48 ">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='my-3'>
        <div>Fullname</div>
        <input className='mt-2 w-[350px] outline-none ' type="text" placeholder='Enter your name'/>

    </div>
    <div className='my-4'>
        <div>Email</div>
        <input className='mt-2 w-[350px] outline-none ' type="email" placeholder='Enter your email'/>

    </div>

    <div className='my-4'>
    <div>Password</div>
 <input className='mt-2 w-[350px] outline-none'  type="text" placeholder='Enter your password'/>


    </div>

    <div className='flex justify-between'>
        <button className='border border-black bg-pink-400 rounded-md px-3 py-1'>Signup</button>
        
        <p>Already have an account?<span className="mx-3   ">
    <a className="text-blue-300 underline cursor-pointer" 
     
     onClick={()=>document.getElementById('my_modal_3').showModal()}
    >Login</a>
    <Login/>
  </span></p>
  
      

    </div>
   
    
    
  </div>
    
    </>
  )
}

export default Signup