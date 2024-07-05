import React from 'react'
import Signup from './Signup'
import { Link } from 'react-router-dom'

function Login() {
  return (

    <>
    <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"   
      
      
      >✕</Link>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='my-3'>
        <div>Email</div>
        <input className='mt-2 w-[350px] outline-none ' type="email" placeholder='Enter your email'/>

    </div>

    <div className='my-3'>
    <div>Password</div>
 <input className='mt-2 w-[350px] outline-none'  type="text" placeholder='Enter your password'/>


    </div>

    <div className='flex justify-between'>
        <button className='border border-black bg-pink-400 rounded-md px-3 py-1'>Login</button>
        <p>Not registered yet?<Link to='/signup' className='underline text-blue-400 cursor-pointer'> Signup</Link></p>
      

    </div>
   
    
    
  </div>
</dialog>
    
    </>

  )
}

export default Login