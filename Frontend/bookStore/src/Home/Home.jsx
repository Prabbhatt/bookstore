import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Freebook from '../components/Freebook'


function Home() {

  return (
   <>
   <div className='dark:bg-slate-900 dark:text-white'>
   <Navbar />
    <Banner />
    <Freebook />
    <Footer />


   </div>
    
   </>
  )
}

export default Home