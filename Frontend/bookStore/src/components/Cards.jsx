import React from 'react'

function Cards({item}) {

    
  return (
    
    <>
    <div className='dark:bg-slate-900  dark:text-white'>
    <div className="card bg-base-100 w-92 h-92 shadow-xl hover:scale-110 hover:shadow-md cursor-pointer dark:bg-black dark:text-white  mx-3">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline">Buy now</div>
    </div>
  </div>
</div>


    </div>
    </>
  )
}

export default Cards