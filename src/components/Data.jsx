import React from 'react'

const Data = (a) => {
  return (
    <div className='w-[70%]'>
      <p className="text-3xl font-medium py-5 text-indigo-600">
        {a.name}
      </p>
      <p className="text-black text-[20px]">{a.review}</p>
    </div>
  )
}

export default Data
