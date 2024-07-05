import React from 'react'

function Contact() {
  return (
   
    <>
  <div className="modal-box mx-auto mt-48 outline-none p-4">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
     
    
    <h3 className="font-bold text-lg">Contact Us</h3>
    <div className='my-4'>
        <div>Name</div>
        <input className='mt-2 w-[350px]  border border-black py-1' type="text" placeholder='Enter your name'/>

    </div>
    <div className='my-4'>
        <div>Email</div>
        <input className='mt-2 w-[350px]  border border-black py-1 ' type="email" placeholder='Enter your email'/>

    </div>

    <div className='my-4'>
    <div>Message</div>
 <input className='mt-2 w-[350px] border border-black py-5 '  type="text" placeholder='Type your message'/>


    </div>

    <button className='mt-6 px-4 py-1 bg-blue-500 text-white rounded-md'>
        Submit
    </button>


    </form>

    
    
  </div>
    




    </>
  )
}

export default Contact