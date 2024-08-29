import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


function Signup() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit =async (data) =>{

    const Userinfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password

    }

   await axios.post("http://localhost:4002/user/signup",Userinfo )
    .then((res)=>{
    if(res.data){
      toast.success('Successfully created!');


    }
    localStorage.setItem("Users" , JSON.stringify(res.data.user));
    navigate("/", { state:{}, replace:false });
    

    }).catch((error) =>{
      if(error.response){
    
      
      toast.error("Error " + error.response.data.message);
      }
    })


  }
  return (
    <>
      <div className="modal-box justify-center items-center mx-auto mt-48">
        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
          {/* if there is a button in form, it will close the modal */}
          <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

          <h3 className="font-bold text-lg">Signup</h3>
          <div className='my-3'>
            <div>fullname</div>
            <input className='mt-2 w-[350px] outline-none' type="text" placeholder='Enter your name' 
             {...register("fullname", { required: true })}
            />
             <br />
        {errors.fullname && <span className='text-red-500 text-sm' >This field is required</span>}

          </div>
          <div className='my-4'>
            <div>Email</div>
            <input className='mt-2 w-[350px] outline-none' type="email" placeholder='Enter your email' 
             {...register("email", { required: true })}
            />
             <br />
        {errors.email && <span className='text-red-500 text-sm'>This field is required</span>}

          </div>
          <div className='my-4'>
            <div>Password</div>
            <input className='mt-2 w-[350px] outline-none' type="password" placeholder='Enter your password' 
             {...register("password", { required: true })}
            />
             <br />
        {errors.password && <span className='text-red-500 text-sm'>This field is required</span>}

          </div>
          <div className='flex justify-between'>
            <button className='border border-black bg-pink-400 rounded-md px-3 py-1'>Signup</button>
          </div>
        </form>

        <p>Already have an account?
          <span className="mx-3">
            <a className="text-blue-300 underline cursor-pointer"
              onClick={() => document.getElementById('my_modal_3').showModal()}
            >Login</a>
          </span>
        </p>
      </div>
      <Login />
    </>
  );
}

export default Signup;

