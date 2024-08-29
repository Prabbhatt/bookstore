import React from 'react'
import Signup from './Signup'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios";
import toast  from 'react-hot-toast';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const Userinfo = {
      email: data.email,
      password: data.password
    }

    await axios.post("http://localhost:4002/user/login", Userinfo)
      .then((res) => {
        if (res.data) {
          toast.success('LoggedIn Successfully!');
        }

        localStorage.setItem("Users", JSON.stringify(res.data.user));
        document.getElementById('my_modal_3').close()
        setTimeout(()=>{
          window.location.reload();}
        ,1000)

      })
      .catch((error) => {
        if (error.response) {
          
          toast.error("Error " + error.response.data.message);
        }
      });
  }

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"  

            onClick={()=>document.getElementById('my_modal_3').close()}  
            
            
            >✕</Link>
            <h3 className="font-bold text-lg">Login</h3>
            <div className='my-3'>
              <div>Email</div>
              <input className='mt-2 w-[350px] outline-none' type="email" placeholder='Enter your email'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}
            </div>
            <div className='my-3'>
              <div>Password</div>
              <input className='mt-2 w-[350px] outline-none' type="password" placeholder='Enter your password'
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}
            </div>
            <div className='flex justify-between'>
              <button className='border border-black bg-pink-400 rounded-md px-3 py-1'>Login</button>
              <p>Not registered yet? <Link to='/signup' className='underline text-blue-400 cursor-pointer'>Signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </>
  )
}

export default Login;
