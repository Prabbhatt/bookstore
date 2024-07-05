import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../src/list.json";
import Cards from './Cards';

function Freebook() {

  const Freebook = list.filter((data)=>{
   return data.category==="Free";

  })

 

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div>
      <div className='ml-8 '>
        <h1 className=' text-3xl  font-bold text-black block mt-8  dark:text-white '>Freebooks Section </h1>
        <p className='text-2xl font-semibold my-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas</p>


      </div>

      <div className=''>
      <Slider {...settings}>
      {Freebook.map((item)=>(

        <Cards item={item} id={item.id} key={item.id} />

      ))}
    
      </Slider>


        
      </div>


    </div>
    
    </>
  )
}

export default Freebook