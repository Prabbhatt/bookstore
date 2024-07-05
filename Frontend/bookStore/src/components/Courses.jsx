import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import list from "../../src/list.json";
import Cards from './Cards';
import { Link } from 'react-router-dom';


function Courses() {
  return (
    <> 
    <Navbar/>
    <div className=' min-h-screen '>

        <div className='mt-20 my-10 mx-auto justify-center items-center ' >

        <h1 className='text-3xl font-bold text-black text-center justify-center  dark:text-white'>We are delighted to have you <span className='text-3xl font-bold text-pink-400'> here!!</span></h1>

        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis aut expedita delectus inventore quisquam velit enim fugiat doloribus ad deserunt aliquam ratione illum quae repudiandae dolorum, corporis sit. Harum?
        </p>
        </div>

        <div className='flex justify-center items-center my-3 px-3 py-1'>
          

       <Link className="border border-black bg-pink-400 text-white rounded-full my-2 px-3 py-1 mx-auto w-[60px] "   to="/">  Back  </Link>

       </div>

        <div className='grid grid-cols-4 px-4 py-1'>
        {
            list.map((item)=>(

                <Cards item={item} id={item.id}/>




            ))



        }
        </div>


    </div>

    <Footer/>

    </>
  )
}

export default Courses