import React from 'react'

const Feedback = () => {
  return (
    <div className='flex p-2 bg-blue-950 items-center rounded-[10px] justify-between '>
      <h1 className='text-5xl font-serif font-medium p-5'>Please give us Your Feedback:</h1>
      <div className='w-[38%] px-2 py-1 rounded-[5px] flex justify-between items-center bg-gray-300'>
        <input type='text' placeholder='Enter your Feedback' className='h-13 text-[20px] outline-0 text-[#3d58c2] px-2 font-medium rounded-2xl' />
        <button type='submit' className='px-5 py-2 bg-[#183c88aa] text-2xl font-medium rounded-[10px]'> Submit </button>
      </div>
    </div>
  )
}

export default Feedback
