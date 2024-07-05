import React from 'react'

function Banner() {
    return (
        <>
            <div className='md:flex max-w-screen-2xl mt-14  '>
                <div className='w-full md:w-1/2 mt-8  dark:text-white dark:bg-slate-900  ml-6'>
                    
                    <h1 className='text-3xl font-bold text-black dark:text-white '>Hello,Welcome here to learn something every day!!!!</h1>
            

                    <p className='text-black mt-4  dark:text-white my-3'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde ad ipsa facilis aut illo a ut! Eaque tempora dolorum rerum doloremque explicabo nisi alias aliquid obcaecati, ea illo dignissimos sequi.</p>
                     
                    <div className='my-5'>
                    <input  type="text" placeholder="Search" className="input border border-black w-full " /> 
                    </div>
                    <div>

                        <button className='bg-pink-300 border border-black rounded-md text-white mt-4 p-3'>
                            Secondary
                        </button>
                    </div>
                </div>
                <div className='w-full md:w-1/2  '>
                    <img className=' h-80 w-92 rounded-md mx-auto pl-16' src="https://img.freepik.com/free-vector/realistic-book-lover-composition-with-stack-colorful-books-with-eyeglasses-home-plants-tea-cup-vector-illustration_1284-77312.jpg?t=st=1720103672~exp=1720107272~hmac=53c61c4675c124f22f5c53973969553af0ee511b032e5edb3d1194631b0e6dea&w=740" alt="" />
                </div>


            </div>


        </>
    )
}

export default Banner