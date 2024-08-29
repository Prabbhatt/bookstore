import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import Cards from './Cards';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";


function Courses() {

  const [book, setBook] = useState([]);
  useEffect(()=>{

   const getBook =async()=>{

    try {

      const res= await axios.get("http://localhost:4002/book");

      setBook(res.data)
      
    } catch (error) {
      console.log(error);
      
    }


   }

   getBook();


  },[])
   
  return (
    <> 
    <div>
    <Navbar/>
    </div>
   
    <div className=' min-h-screen dark:bg-slate-900 dark:text-white'>

        <div className=' py-20 mx-auto justify-center items-center dark:bg-slate-900 dark:text-white' >

        <h1 className='text-3xl font-bold text-black text-center justify-center  dark:bg-slate-900 dark:text-white'>We are delighted to have you <span className='text-3xl font-bold text-pink-400'> here!!</span></h1>

        <p className='my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde reiciendis aut expedita delectus inventore quisquam velit enim fugiat doloribus ad deserunt aliquam ratione illum quae repudiandae dolorum, corporis sit. Harum?
        </p>
        </div>

        <div className='flex justify-center items-center my-3 px-3 py-1'>
          

       <Link className="border border-black bg-pink-400 text-white rounded-full my-2 px-3 py-1 mx-auto w-[60px] "   to="/">  Back  </Link>

       </div>

        <div className='grid grid-cols-1 md:grid-cols-4 px-4 py-1'>
        {
            book.map((item)=>(

                <Cards item={item} id={item.id} key={item.id}/>




            ))



        }
        </div>


    </div>

    <Footer/>

    </>
  )
}

export default Courses