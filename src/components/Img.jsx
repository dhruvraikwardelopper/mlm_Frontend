import React from 'react'


const Img = (a) => {
  return (
    <div className='h-full w-[25%] '>
      <img src={a.image} alt="" srcset="" className="h-full w-full object-cover rounded-full" />
    </div>
  )
}

export default Img;
