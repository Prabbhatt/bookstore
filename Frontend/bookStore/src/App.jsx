import { useState } from 'react'


import Home from './Home/Home'
import { Routes ,Route, Navigate} from "react-router-dom";
import Courses from './components/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import {Toaster} from "react-hot-toast";
import { useAuth } from './context/AuthProvider';


function App() {

  const [authUser,setAuthUser]=useAuth();


  return (
    <>

    <div className='dark:bg-slate-900 dark:text-white'>
      

        
       <Routes>
        

        <Route path="/" element={<Home/>}   />

<Route path='/Course' element= { authUser? <Courses/>: <Navigate to="/signup"/> } />

 <Route path='/signup' element={<Signup/>} />

 <Route path='/contact' element={  <Contact/>} />

      
        



       </Routes>

       <Toaster />


       </div>
       
      



    </>
  )
}

export default App
