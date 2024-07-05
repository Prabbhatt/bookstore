import { useState } from 'react'


import Home from './Home/Home'
import { Routes ,Route} from "react-router-dom";
import Courses from './components/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';


function App() {


  return (
    <>
      

        
       <Routes>
        

        <Route path="/" element={<Home/>}   />

<Route path='/Course' element={<Courses/>} />

 <Route path='/signup' element={<Signup/>} />

 <Route path='/contact' element={<Contact/>} />

      
        



       </Routes>
       
      



    </>
  )
}

export default App
